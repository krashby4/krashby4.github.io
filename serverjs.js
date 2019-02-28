require ([
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  "esri/layers/MapImageLayer",
  "esri/layers/support/Sublayer"
], function(
  Map, MapView, Graphic, MapImageLayer, Sublayer
) {

  var map = new Map({
    basemap: "streets-night-vector"
  });

  var view = new MapView({
    center: [-111.649216, 40.250763],
    container: "viewDiv",
    map: map,
    zoom: 5
  });

  var layer = new MapImageLayer({
    url: "https://geoserver2.byu.edu/arcgis/rest/services/Nerdalicious/HWRaster/MapServer",
    sublayers: [ {id: 0}]
  });

  var soillayer = new MapImageLayer({
    url: "https://geoserver2.byu.edu/arcgis/rest/services/Nerdalicious/HWPublish/MapServer",
    sublayers: [ {id: 0}]
  });
  map.add(soillayer); // adds the layer to the map
  map.add(layer);
});
