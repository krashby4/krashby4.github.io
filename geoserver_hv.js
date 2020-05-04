var australia_boundary = L.tileLayer.wms("https://geoserver.hydroshare.org/geoserver/wms", {
      layers: 'HS-9572eb7fa8744807962b9268593bd4ad:australia-geoglows-catchment australia-geoglows-catchment',
      format: 'image/png',
      transparent: true
}),
    northamerica_boundary = L.tileLayer.wms("https://geoserver.hydroshare.org/geoserver/wms", {
      layers: '	HS-43ae93136e10439fbf2530e02156caf0:north_america-geoglows-catchment north_america-geoglows-catchment',
      format: 'image/png',
      transparent: true
}),
    africa_boundary = L.tileLayer.wms("https://geoserver.hydroshare.org/geoserver/wms", {
      layers: 'HS-121bbce392a841178476001843e7510b:africa-geoglows-catchment africa-geoglows-catchment',
      format: 'image/png',
      transparent: true
});

var boundaries = L.layerGroup([australia_boundary, northamerica_boundary, africa_boundary]);

var Esri_WorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
	                      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
}),
    Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

var map = L.map('mapid', {
    center: [40.245512, -111.657063],
    zoom: 4,
    layers: [Esri_WorldTopoMap, Esri_WorldImagery]
});

var baseMaps = {
    "Topographic": Esri_WorldTopoMap,
    "World Imagery": Esri_WorldImagery
};

var overlayMaps = {
      "All boundaries": boundaries,
      "Australia": australia_boundary,
      "North America": northamerica_boundary,
      "Africa": africa_boundary
};


L.control.layers(baseMaps, overlayMaps).addTo(map);
