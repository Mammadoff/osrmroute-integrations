const query = String(bundle.inputData.q || '').trim();
if (!query || query.length > 500) {
  throw new z.errors.Error('Enter an address or place of 1 to 500 characters.', 'InvalidQuery', 400);
}
return z.request({
  url: 'https://osrmroute.com/api/1/geocode',
  method: 'GET',
  headers: {Authorization: 'Bearer ' + bundle.authData.api_key, Accept: 'application/json'},
  params: {q: query, limit: 1}
}).then((response) => {
  response.throwForStatus();
  const data = response.json;
  if (!data || !Array.isArray(data.hits)) {
    throw new z.errors.Error('OSRMRoute returned an unexpected response.', 'InvalidResponse', 502);
  }
  return data.hits.map((hit) => ({
    ...hit,
    id: String(hit.osm_id || [hit.point?.lat, hit.point?.lng, hit.name].join(':')),
    latitude: hit.point?.lat,
    longitude: hit.point?.lng
  }));
});
