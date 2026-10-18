import json
import pathlib
import re

n = pathlib.Path(__file__).resolve().parents[1]
s = json.loads((n / "openapi.json").read_text())
props = []
ops = []
manifest = []
for path, item in s["paths"].items():
    for method, o in item.items():
        if method not in ["get", "post", "delete"]:
            continue
        key = o["operationId"]
        show = {"show": {"resource": ["api"], "operation": [key]}}
        params = item.get("parameters", []) + o.get("parameters", [])
        query = []
        request = {"method": method.upper(), "url": path}
        for p in params:
            if p["in"] not in ["path", "query"]:
                continue
            name = p["name"]
            field = key + "_" + re.sub("[^a-zA-Z0-9]", "_", name)
            schema = p.get("schema", {})
            typ = schema.get("type", "string")
            prop = {
                "displayName": name.replace("_", " ").title(),
                "name": field,
                "type": {
                    "integer": "number",
                    "number": "number",
                    "boolean": "boolean",
                }.get(typ, "string"),
                "default": schema.get(
                    "default",
                    False
                    if typ == "boolean"
                    else 0
                    if typ in ["number", "integer"]
                    else "",
                ),
                "description": p.get("description", name).strip().rstrip("."),
            }
            if typ == "boolean" and not prop["description"].startswith(
                "Whether"
            ):
                prop["description"] = (
                    "Whether "
                    + prop["description"][0].lower()
                    + prop["description"][1:]
                )
            if schema.get("enum"):
                prop.update(
                    type="options",
                    options=[
                        {"name": str(x), "value": x} for x in schema["enum"]
                    ],
                    default=schema.get("default", schema["enum"][0]),
                )
            if p["in"] == "path":
                prop.update(required=True, displayOptions=show)
                props.append(prop)
                request["url"] = request["url"].replace(
                    "{" + name + "}",
                    "{{encodeURIComponent($parameter." + field + ")}}",
                )
            elif p.get("required"):
                prop.update(
                    required=True,
                    displayOptions=show,
                    routing={"send": {"type": "query", "property": name}},
                )
                props.append(prop)
            else:
                prop["name"] = name
                prop["routing"] = {"send": {"type": "query", "property": name}}
                query.append(prop)
        if "{{" in request["url"]:
            request["url"] = "=" + request["url"]
        if query:
            props.append(
                {
                    "displayName": "Additional Fields",
                    "name": key + "_options",
                    "type": "collection",
                    "default": {},
                    "placeholder": "Add Field",
                    "displayOptions": show,
                    "options": query,
                }
            )
        if o.get("requestBody"):
            content = o["requestBody"]["content"]["application/json"]
            example = content.get("example", {})
            if not example:
                examples = content.get("examples", {})
                example = next(iter(examples.values()), {}).get("value", {})
            field = key + "_body"
            props.append(
                {
                    "displayName": "Request Body (JSON)",
                    "name": field,
                    "type": "json",
                    "default": json.dumps(example, indent=2),
                    "required": True,
                    "displayOptions": show,
                    "description": "JSON request body. See the OSRMRoute API reference for required fields and plan limits",
                }
            )
            request["body"] = (
                "={{typeof $parameter."
                + field
                + ' === "string" ? JSON.parse($parameter.'
                + field
                + ") : $parameter."
                + field
                + "}}"
            )
        label = o.get("summary", key)
        ops.append(
            {
                "name": label,
                "value": key,
                "action": label,
                "description": method.upper() + " " + path,
                "routing": {"request": request},
            }
        )
        manifest.append(
            {"operationId": key, "method": method.upper(), "path": path}
        )
properties = [
    {
        "displayName": "Resource",
        "name": "resource",
        "type": "options",
        "noDataExpression": True,
        "options": [{"name": "API", "value": "api"}],
        "default": "api",
    },
    {
        "displayName": "Operation",
        "name": "operation",
        "type": "options",
        "noDataExpression": True,
        "displayOptions": {"show": {"resource": ["api"]}},
        "options": sorted(ops, key=lambda x: x["name"]),
        "default": "get_geocoding",
    },
] + props
(n / "nodes/Osrmroute/operations.ts").write_text(
    "// Generated from the public OpenAPI contract; update with scripts/generate.py.\nimport type { INodeProperties } from 'n8n-workflow';\nexport const operations: INodeProperties[] = "
    + json.dumps(properties, indent=2)
    + ";\n"
)
(n / "tests/manifest.json").write_text(json.dumps(manifest, indent=2) + "\n")
print("Generated", len(ops), "operations")
