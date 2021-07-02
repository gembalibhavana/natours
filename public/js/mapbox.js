/*eslint-disable*/

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZ2JoYXZhbmEiLCJhIjoiY2txZ3VrN2RkMDR4cDJ2cWptZXNqNjN2ZiJ9.jQriGhXzhmOmKmBdgnU8IQ';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/gbhavana/ckqgv650j0hw718qro736blm9',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();
  locations.forEach((loc) => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({ offset: 30 })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}:${loc.description}</p>`)
      .addTo(map);
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: { top: 200, bottom: 150, left: 200, right: 100 },
  });
};
