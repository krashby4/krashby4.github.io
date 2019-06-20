require([
  "esri/Map",
  "esri/views/MapView",
  "esri/widgets/BasemapToggle",
  "esri/widgets/BasemapGallery"
], function(Map, MapView, BasemapToggle, BasemapGallery) {

  var map = new Map({
    basemap: "topo-vector"
  });

  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-118.80543,34.02700],
    zoom: 13
  });

       var basemapToggle = new BasemapToggle({
         view: view,
         secondMap: "streets"
       });

       view.ui.add(basemapToggle,"bottom-right");

//  var basemapGallery = new BasemapGallery({
  //  view: view,
  //  source: {
  //    portal: {
  //      url: "http://www.arcgis.com",
  //      useVectorBasemaps: true, // Load vector tile basemap group
  //    },
  //  }
//  });

//  view.ui.add(basemapGallery, "top-right"); // Add to the view

});
