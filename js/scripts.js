mapboxgl.accessToken = 'pk.eyJ1IjoibmljaG9sYXNjb3dhbjE3IiwiYSI6ImNrM28yNm1uaDAwcHkzbnFkam02dHJ0NjQifQ.E1RO9e96qZUpgn-1muXorg';

var map = new mapboxgl.Map({
  container: 'mapContainer', // container ID
  style: 'mapbox://styles/mapbox/light-v10', // style URL
  center: [-73.94, 40.74], // starting position [lng, lat]
  zoom: 9.8 // starting zoom
});

// add navigation control in top left
var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');

var filterGroup = document.getElementById('filter-group');

// Day toggles
var toggleableDays = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];

// Add checkbox and label elements for the layer.
toggleableDays.forEach(function(id) {
  var input = document.createElement('input');
    input.className = 'active';
    input.type = 'checkbox';
    input.id = id;
    input.checked = true;
    filterGroup.appendChild(input);

  var label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = id;
    filterGroup.appendChild(label);
  });

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
      el.id = 'DO:' + market.Days_of_Operation;
      el.style.backgroundImage = 'url("img/market-icon.png")';
      el.style.width = '30px';
      el.style.height = '30px';

    new mapboxgl.Marker(el)
      .setLngLat([market.Longitude, market.Latitude])
      .setPopup(new mapboxgl.Popup().setHTML(html)) // add popup
      .addTo(map);
  });
})

document.getElementById("MONDAY").addEventListener('change', function(e) {
  if (e.target.checked === false) {
    $('*[id*=Monday]').each(function() {
      $(this).hide();});
  } else {
    $('*[id*=Monday]').each(function() {
      $(this).show();});
  }
})

document.getElementById("TUESDAY").addEventListener('change', function(e) {
  if (e.target.checked === false) {
    $('*[id*=Tuesday]').each(function() {
      $(this).hide();});
  } else {
    $('*[id*=Tuesday]').each(function() {
      $(this).show();});
  }
})

document.getElementById("WEDNESDAY").addEventListener('change', function(e) {
  if (e.target.checked === false) {
    $('*[id*=Wednesday]').each(function() {
      $(this).hide();});
  } else {
    $('*[id*=Wednesday]').each(function() {
      $(this).show();});
  }
})

document.getElementById("THURSDAY").addEventListener('change', function(e) {
  if (e.target.checked === false) {
    $('*[id*=Thursday]').each(function() {
      $(this).hide();});
  } else {
    $('*[id*=Thursday]').each(function() {
      $(this).show();});
  }
})

document.getElementById("FRIDAY").addEventListener('change', function(e) {
  if (e.target.checked === false) {
    $('*[id*=Friday]').each(function() {
      $(this).hide();});
  } else {
    $('*[id*=Friday]').each(function() {
      $(this).show();});
  }
})

document.getElementById("SATURDAY").addEventListener('change', function(e) {
  if (e.target.checked === false) {
    $('*[id*=Saturday]').each(function() {
      $(this).hide();});
  } else {
    $('*[id*=Saturday]').each(function() {
      $(this).show();});
  }
})

document.getElementById("SUNDAY").addEventListener('change', function(e) {
  if (e.target.checked === false) {
    $('*[id*=Sunday]').each(function() {
      $(this).hide();});
  } else {
    $('*[id*=Sunday]').each(function() {
      $(this).show();});
  }
})
