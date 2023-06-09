"use strict"; // JS strict mode 

var myFunctionHolder = {};
//declaring function addPopups
myFunctionHolder.addPopups = function (feature, layer) {
  //this if statement used to check whether the feature has a property named "Location"
  if (feature.properties && feature.properties.Location) {
    layer.bindPopup(feature.properties.Location);
  }
}

//declaring function pointToCircle
myFunctionHolder.pointToCircle =  function (feature, latlng) {
  var geojsonMarkerOptions = {
    radius: 8,
    //fillColor: "#F46B06",
    fillColor: "yellow",
    color: "black",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
  };
  var circleMarker = L.circleMarker(latlng, geojsonMarkerOptions);
  return circleMarker;
}

window.onload = function (){

var mapObject = L.map('mapId').setView([39.99,-75.16], 11);

var baseMap = L.tileLayer('https://api.mapbox.com/styles/v1/liping17/cj6ut4r6u1vnw2rmrtwymq5lq/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGlwaW5nMTciLCJhIjoiY2o2dTJwYTJ0MG1wdzMzbzRrNDJlOG5jbyJ9.cr8HRltBug7xDGgTV_X__A', {
  maxZoom: 18,
  attribution: '&copy; <a href=”https://www.mapbox.com/about/maps/”>Mapbox</a> &copy; <a href=”http://www.openstreetmap.org/copyright”>OpenStreetMap</a>'
});

baseMap.addTo(mapObject);

// bikeThefts is the variable name we defined in Bike_Thefts_2011.js file. 
//var bikesLayerGroup = L.geoJSON(bikeThefts, {
//  onEachFeature: myFunctionHolder.addPopups,
 // pointToLayer: myFunctionHolder.pointToCircle
//});


//mapObject.addLayer(bikesLayerGroup);
//mapObject.fitBounds(bikesLayerGroup.getBounds());



// don't forget to include leaflet-heatmap.js


//var baseLayer = L.tileLayer(
  'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '...',
    maxZoom: 18
  }
//);

var cfg = {
  // radius should be small ONLY if scaleRadius is true (or small radius is intended)
  // if scaleRadius is false it will be the constant radius used in pixels
  "radius": 0.01,
  "maxOpacity": .8,
  // scales the radius based on map zoom
  "scaleRadius": true,
  // if set to false the heatmap uses the global maximum for colorization
  // if activated: uses the data maximum within the current map boundaries
  //   (there will always be a red spot with useLocalExtremas true)
  "useLocalExtrema": true,
  // which field name in your data represents the latitude - default "lat"
  latField: 'lat',
  // which field name in your data represents the longitude - default "lng"
  lngField: 'lng',
  // which field name in your data represents the data value - default "value"
  valueField: 'value'
};


var theftsHeatMapData = {
	"max": 2500,
	"data": [{
		"lat": 39.9249462,
		"lng": -75.17362857,
		"value": 150
	}, {
		"lat": 39.9243654,
		"lng": -75.16977401,
		"value": 730
	}, {
		"lat": 39.9208719,
		"lng": -75.17443905,
		"value": 0
	}, {
		"lat": 39.9207263,
		"lng": -75.17335238,
		"value": 350
	}, {
		"lat": 39.921822,
		"lng": -75.17205462,
		"value": 0
	}, {
		"lat": 39.92808,
		"lng": -75.17592058,
		"value": 1000
	}, {
		"lat": 39.9065828,
		"lng": -75.18345894,
		"value": 380
	}, {
		"lat": 39.9186539,
		"lng": -75.18608711,
		"value": 600
	}, {
		"lat": 39.9269916,
		"lng": -75.17087675,
		"value": 500
	}, {
		"lat": 39.920796,
		"lng": -75.17752928,
		"value": 0
	}, {
		"lat": 39.9243654,
		"lng": -75.16977401,
		"value": 300
	}, {
		"lat": 39.9217922,
		"lng": -75.18196436,
		"value": 500
	}, {
		"lat": 39.9274315,
		"lng": -75.17429279,
		"value": 160
	}, {
		"lat": 39.927062,
		"lng": -75.17141746,
		"value": 0
	}, {
		"lat": 40.0445197,
		"lng": -75.10180472,
		"value": 100
	}, {
		"lat": 40.0549575,
		"lng": -75.06396785,
		"value": 200
	}, {
		"lat": 40.0498557,
		"lng": -75.08596859,
		"value": 450
	}, {
		"lat": 40.054576,
		"lng": -75.09084733,
		"value": 109
	}, {
		"lat": 40.0514971,
		"lng": -75.07352612,
		"value": 750
	}, {
		"lat": 40.0417685,
		"lng": -75.0589287,
		"value": 700
	}, {
		"lat": 40.0539577,
		"lng": -75.06490875,
		"value": 210
	}, {
		"lat": 40.0526862,
		"lng": -75.08100221,
		"value": 400
	}, {
		"lat": 40.0436001,
		"lng": -75.06459483,
		"value": 225
	}, {
		"lat": 40.0686568,
		"lng": -75.08708419,
		"value": 100
	}, {
		"lat": 40.0458646,
		"lng": -75.10729722,
		"value": 200
	}, {
		"lat": 40.0493532,
		"lng": -75.0866419,
		"value": 100
	}, {
		"lat": 40.0443811,
		"lng": -75.06078194,
		"value": 230
	}, {
		"lat": 40.034439,
		"lng": -75.08539188,
		"value": 125
	}, {
		"lat": 40.0408508,
		"lng": -75.10580331,
		"value": 100
	}, {
		"lat": 40.0505443,
		"lng": -75.08014132,
		"value": 1500
	}, {
		"lat": 40.0447562,
		"lng": -75.06645483,
		"value": 1999
	}, {
		"lat": 40.0542295,
		"lng": -75.07146339,
		"value": 250
	}, {
		"lat": 40.0444029,
		"lng": -75.08439975,
		"value": 0
	}, {
		"lat": 40.0605195,
		"lng": -75.06223469,
		"value": 1000
	}, {
		"lat": 40.0499227,
		"lng": -75.05814629,
		"value": 65
	}, {
		"lat": 39.9428662,
		"lng": -75.15863585,
		"value": 250
	}, {
		"lat": 39.9413966,
		"lng": -75.14776545,
		"value": 150
	}, {
		"lat": 39.9387251,
		"lng": -75.16029421,
		"value": 450
	}, {
		"lat": 39.9361174,
		"lng": -75.16339684,
		"value": 100
	}, {
		"lat": 39.9266929,
		"lng": -75.1450019,
		"value": 159
	}, {
		"lat": 39.9399594,
		"lng": -75.15609711,
		"value": 575
	}, {
		"lat": 39.9206121,
		"lng": -75.14136976,
		"value": 250
	}, {
		"lat": 39.9204835,
		"lng": -75.13900575,
		"value": 15
	}, {
		"lat": 39.941697,
		"lng": -75.15016956,
		"value": 200
	}, {
		"lat": 39.9267179,
		"lng": -75.15289388,
		"value": 2000
	}, {
		"lat": 39.9267897,
		"lng": -75.16384419,
		"value": 800
	}, {
		"lat": 39.9349965,
		"lng": -75.15724932,
		"value": 400
	}, {
		"lat": 39.931813,
		"lng": -75.15453251,
		"value": 500
	}, {
		"lat": 39.9199701,
		"lng": -75.15562614,
		"value": 400
	}, {
		"lat": 39.9176244,
		"lng": -75.16085957,
		"value": 220
	}, {
		"lat": 39.9322295,
		"lng": -75.14653641,
		"value": 300
	}, {
		"lat": 39.9375511,
		"lng": -75.15015992,
		"value": 800
	}, {
		"lat": 39.9380465,
		"lng": -75.15004629,
		"value": 250
	}, {
		"lat": 39.9389873,
		"lng": -75.15822547,
		"value": 150
	}, {
		"lat": 39.9353151,
		"lng": -75.15858191,
		"value": 530
	}, {
		"lat": 39.9399053,
		"lng": -75.15225011,
		"value": 200
	}, {
		"lat": 39.9407922,
		"lng": -75.15087013,
		"value": 300
	}, {
		"lat": 39.9399174,
		"lng": -75.15233157,
		"value": 950
	}, {
		"lat": 39.9265004,
		"lng": -75.1669937,
		"value": 350
	}, {
		"lat": 39.9439586,
		"lng": -75.16389072,
		"value": 200
	}, {
		"lat": 39.9389912,
		"lng": -75.15785035,
		"value": 530
	}, {
		"lat": 39.9387212,
		"lng": -75.15310539,
		"value": 250
	}, {
		"lat": 39.9418296,
		"lng": -75.1659912,
		"value": 350
	}, {
		"lat": 39.9417755,
		"lng": -75.15078386,
		"value": 500
	}, {
		"lat": 39.9304195,
		"lng": -75.15484301,
		"value": 100
	}, {
		"lat": 39.9368131,
		"lng": -75.14620151,
		"value": 589
	}, {
		"lat": 39.935618,
		"lng": -75.16058073,
		"value": 379
	}, {
		"lat": 39.9381161,
		"lng": -75.15989294,
		"value": 400
	}, {
		"lat": 39.9143886,
		"lng": -75.16617571,
		"value": 200
	}, {
		"lat": 39.9273827,
		"lng": -75.14509034,
		"value": 1200
	}, {
		"lat": 39.9163855,
		"lng": -75.15225534,
		"value": 150
	}, {
		"lat": 39.9425621,
		"lng": -75.15386463,
		"value": 500
	}, {
		"lat": 39.9163501,
		"lng": -75.15861835,
		"value": 150
	}, {
		"lat": 39.9260711,
		"lng": -75.14792525,
		"value": 75
	}, {
		"lat": 39.9398059,
		"lng": -75.15898181,
		"value": 700
	}, {
		"lat": 39.9415831,
		"lng": -75.15645323,
		"value": 315
	}, {
		"lat": 39.9243356,
		"lng": -75.16956694,
		"value": 350
	}, {
		"lat": 39.9135947,
		"lng": -75.17081715,
		"value": 90
	}, {
		"lat": 39.9412146,
		"lng": -75.15348987,
		"value": 600
	}, {
		"lat": 39.9314548,
		"lng": -75.15700256,
		"value": 550
	}, {
		"lat": 39.9428248,
		"lng": -75.15919556,
		"value": 1000
	}, {
		"lat": 39.9390549,
		"lng": -75.14228118,
		"value": 900
	}, {
		"lat": 39.9244185,
		"lng": -75.16974726,
		"value": 500
	}, {
		"lat": 39.9319667,
		"lng": -75.16093903,
		"value": 200
	}, {
		"lat": 39.9392988,
		"lng": -75.14626166,
		"value": 300
	}, {
		"lat": 39.9279643,
		"lng": -75.15866872,
		"value": 125
	}, {
		"lat": 39.9166055,
		"lng": -75.16283894,
		"value": 30
	}, {
		"lat": 39.9307893,
		"lng": -75.16536628,
		"value": 500
	}, {
		"lat": 39.9179916,
		"lng": -75.16147976,
		"value": 397
	}, {
		"lat": 39.9382297,
		"lng": -75.15955963,
		"value": 200
	}, {
		"lat": 39.9356091,
		"lng": -75.16020219,
		"value": 500
	}, {
		"lat": 39.9225251,
		"lng": -75.14593711,
		"value": 200
	}, {
		"lat": 39.9222479,
		"lng": -75.16792205,
		"value": 300
	}, {
		"lat": 39.9383303,
		"lng": -75.16276965,
		"value": 200
	}, {
		"lat": 39.9257431,
		"lng": -75.16392968,
		"value": 150
	}, {
		"lat": 39.9411034,
		"lng": -75.16056531,
		"value": 2500
	}, {
		"lat": 39.9234837,
		"lng": -75.15652958,
		"value": 200
	}, {
		"lat": 39.9310285,
		"lng": -75.1468908,
		"value": 150
	}, {
		"lat": 39.9206764,
		"lng": -75.1569947,
		"value": 200
	}, {
		"lat": 39.9401318,
		"lng": -75.16421481,
		"value": 400
	}]
}

var heatmapLayer = new HeatmapOverlay(cfg);

heatmapLayer.setData(theftsHeatMapData)
mapObject.addLayer(heatmapLayer)

};