const MapViewModel = require("./map-view-model");
var mapsModule = require("nativescript-google-maps-sdk");


const geoJson = require("./data")



function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new MapViewModel();
}

// function isValidGEOJSON(obj) {
//   try {
//     if(obj.)
//   }
// }


function onMapReady(args) {
    var mapView = args.object;
    var marker = new mapsModule.Marker();


    marker.position = mapsModule.Position.positionFromLatLng(45.649268385921395, 13.762092590332031);
    marker.title = "Caffe degli specchi";
    marker.color= "green"
    marker.snippet = "Colazione";
    marker.userData = { index : 1};
    mapView.addMarker(marker);

    // Disabling zoom gestures
  mapView.settings.zoomGesturesEnabled = false;
}

exports.onMapReady = onMapReady;
exports.onNavigatingTo = onNavigatingTo;
