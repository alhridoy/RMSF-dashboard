function RFMap() {
    var geojson_data;

    $.ajax({
      url: "ari_RF.json",
      method: "GET",
      async: false,
      success : function(data){
          geojson_data = data
      }
    });
    var mapboxAccessToken = "pk.eyJ1IjoiYW1ua2hhbiIsImEiOiJjazg3ZzJpdmswNXp4M2dxdnR5NnM2b3V5In0.sDPqIb4yM4CSY8mzsDaX8w";
    var map_RF = L.map('map_rf').setView([34.0489, -111.0937], 4);
  
    //https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    //c
    function responsiveMap(x) {
      if (x.matches) { // If media query matches
          //https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png
        L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors data ',
          id: 'mapbox/light-v9',
          maxZoom: 18,
          minZoom: 7
        }).addTo(map_RF);
      } else {
        //https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png
        L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors data ',
          maxZoom: 18,
          minZoom: 6
        }).addTo(map_RF);
      }
    }
  
    // control that shows state info on hover
    var info = L.control();
  
    info.onAdd = function (map_RF) {
      this._div = L.DomUtil.create('div', 'info');
      this.update();
      return this._div;
    };
  
    info.update = function (props) {
      this._div.innerHTML = '<h4>High risk of RMSF incidence</h4>' +  
        (props ? '<b>' + props.NAME + '</b><br />' + props.p + '% probability ' : 'hover over the county');
    };
  
    info.addTo(map_RF);
  
    function getColor(d) {
      return  d > 300 ? '#800026' :
      d > 50  ? '#BD0026' :
      d > 10  ? '#E31A1C' :
      d > 1  ? '#FC4E2A' :
      d > .50   ? '#FD8D3C' :
      d > .30   ? '#FEB24C' :
      d > 0   ? '#FED976' :
      '#FFEDA0';
    }
  
    function style(feature) {
      return {
        fillColor: getColor(feature.properties.p),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
      };
    }
  
    function highlightFeature(e) {
      var layer = e.target;
      layer.setStyle({
        weight: 2,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.5
      });
      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
      info.update(layer.feature.properties);
    }
  
    var geojson;
  
    function resetHighlight(e) {
      geojson.resetStyle(e.target);
      info.update();
    }
  
    function zoomToFeature(e) {
      map.fitBounds(e.target.getBounds());
    }
  
    function onEachFeature(feature, layer) {
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
      });
    }
  
    geojson = L.geoJson(geojson_data, {
      style: style,
      onEachFeature: onEachFeature
    }).addTo(map_RF);
  
    var legend = L.control({position: 'bottomright'});
  
    legend.onAdd = function (map_RF) {
      var div = L.DomUtil.create('div', 'info legend'),
          grades = [0, .30, .5, 1, 30],
          labels = [],
          from, to;
      for (var i = 0; i < grades.length; i++) {
        from = grades[i];
        to = grades[i + 1];
        labels.push(
          '<i style="background:' + getColor(from + 1) + '"></i> ' +
          from + (to ? '&ndash;' + to : '+'));
      }
      div.innerHTML = labels.join('<br>');
      return div;
    };
  
    legend.addTo(map_RF);
  
  
  
  
    var x = window.matchMedia("(min-width: 992px)")
    responsiveMap(x) // Call listener function at run time
    x.addListener(responsiveMap) // Attach listener function on state changes
  
  }
  
  
  
  // ZelaMap
 RFMap();


  
  