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

var filterGroup = document.getElementById('filter-group');

$.getJSON('./data/markets.json', function(markets) {
  markets.forEach(function(market) {
    var html = `
      <div>
        <h3>${market.Market_Name}</h3>
        <div>Address: ${market.Street_Address}</div>
        <div>Hours of Operation: ${market.Days_of_Operation} ${market.Hours_of_Operations}</div>
      </div>
    `

    // create a DOM element for the marker
    var el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage = 'url("img/market-icon.png")';
      el.style.width = '30px';
      el.style.height = '30px';

    new mapboxgl.Marker(el)
      .setLngLat([market.Longitude, market.Latitude])
      .setPopup(new mapboxgl.Popup().setHTML(html)) // add popup
      .addTo(map);
  });
})
