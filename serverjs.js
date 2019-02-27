require ([
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  "esri/layers/MapImageLayer"
], function(
  Map, MapView, Graphic, MapImageLayer
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
    url: "http://geoserver2.byu.edu/arcgis/rest/services/Nerdalicious/HWPublish/MapServer"
  });
  map.add(layer); // adds the layer to the map
});
