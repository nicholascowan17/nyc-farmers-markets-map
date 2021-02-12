mapboxgl.accessToken = 'pk.eyJ1IjoibmljaG9sYXNjb3dhbjE3IiwiYSI6ImNrM28yNm1uaDAwcHkzbnFkam02dHJ0NjQifQ.E1RO9e96qZUpgn-1muXorg';

var map = new mapboxgl.Map({
  container: 'mapContainer', // container ID
  style: 'mapbox://styles/mapbox/light-v10', // style URL
  center: [-73.94, 40.74], // starting position [lng, lat]
  zoom: 9.8 // starting zoom
});

// add navigation control in top left
var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');

$.getJSON('./data/markets.json', function(markets) {
  markets.forEach(function(market) {
    var html = `
      <div>
        <h3>${market.Market_Name}</h3>
        <div>Location: ${market.Street_Address}</div>
        <div>Hours of Operation: ${market.Days_of_Operation} ${market.Hours_of_Operations}</div>
      </div>
    `

    new mapboxgl.Marker({
      color: 'green',
      scale: 0.8
    })
      .setLngLat([market.Longitude, market.Latitude])
      .setPopup(new mapboxgl.Popup().setHTML(html)) // add popup
      .addTo(map);
  })
})
