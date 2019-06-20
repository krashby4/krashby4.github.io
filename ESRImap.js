require([
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  "esri/widgets/BasemapToggle",
  "esri/widgets/BasemapGallery"
], function(
  Map, MapView, Graphic, BasemapToggle, BasemapGallery
) {

  var basemapToggle = new BasemapToggle({
    view: view,
    nextBasemap: "satellite"
  });

  view.ui.add(basemapToggle, "bottom-right");

  var map = new Map({
    basemap: "streets-night-vector"
  });

  var view = new MapView({
    center: [-111.612669, 33.374902],
    container: "viewDiv",
    map: map,
    zoom: 1
  });

  var homepoint = {
    type: "point",
    longitude: -111.612669,
    latitude: 33.374902
  };

  var mparray = [[-1.468609, 52.749273],
                 [-6.261523, 53.346742],
                 [131.036888, -25.344377],
                 [139.732240, 35.708767],
                 [12.315499, 45.440965],
                 [-149.901389, 61.217526],
                 [8.535907, 47.375871],
                 [-157.858950, 21.306024],
                 [174.818646, -41.297516,],
                 [-0.879013, 49.372433]]
  ;
  var sms = {
    type: "simple-marker",
    color: "#c10000",
    size: 8
  };

//Ashby-de-la-Zouch
  var m1 = {
    type: "multipoint",
    points: mparray[0]
  };
  var m1s = "Lots of my ancestors came from England. This town could be the origin of my last name." + "<img src='https://www.english-heritage.org.uk/siteassets/home/visit/places-to-visit/ashby-de-la-zouch-castle/ashby-de-la-zouch-castle-hero.jpg' alt='Ashby-de-la-Zouch'>";
  var m1g = new Graphic({
    geometry: m1,
    symbol: sms,
    popupTemplate: {
      title: "Ashby-de-la-Zouch, UK",
      content: m1s,
    }
  });

//Dublin
  var m2 = {
    type: "multipoint",
    points: mparray[1]
  };
  var m2s = 'I think the Emerald Isle would suit me well.' + "<img src='https://www.nationalgeographic.com/content/dam/travel/2017-digital/dublin/river-bridge-dublin-ireland.ngsversion.1511845252606.adapt.1900.1.jpg' alt='Dublin, Ireland'>";
  var m2g = new Graphic({
    geometry: m2,
    symbol: sms,
    popupTemplate: {
      title: "Dublin, Ireland",
      content: m2s,
    }
  });

//Australia
  var m3 = {
    type: "multipoint",
    points: mparray[2]
  };
  var m3s = "I've always had a curious fascination with Australia." + "<img src='https://media.cntraveler.com/photos/599f4ecc9e921575fb811e9a/master/w_420,c_limit/Uluru-Ayers-Rock-GettyImages-149271905.jpg' alt='Ayers Rock'>";
  var m3g = new Graphic({
    geometry: m3,
    symbol: sms,
    popupTemplate: {
      title: "Ayers Rock, Australia",
      content: m3s,
    }
  });

//Tokyo, Japan
  var m4 = {
    type: "multipoint",
    points: mparray[3]
  };
  var m4s = "Everybody who went seems to love it. Figure I'd go see what all the hooplah is about." + "<img src='https://cdn-images-1.medium.com/max/2000/1*kpI0g3u52WdvC3zv7gSjQg.jpeg' alt='Tokyo, Japan'>";
  var m4g = new Graphic({
    geometry: m4,
    symbol: sms,
    popupTemplate: {
      title: "Tokyo, Japan",
      content: m4s,
    }
  });

//Venice
var m5 = {
type: "multipoint",
points: mparray[4]
};
var m5s = "Venice has a storied history, full of culture and life. Plus, one of my favorite video games takes place partly in Venice." + "<img src='https://www.azamaraclubcruises.com/sites/default/files/heros/venice-italy.jpg' alt='Venice, Italy'>";
var m5g = new Graphic({
geometry: m5,
symbol: sms,
popupTemplate: {
title: "Venice, Italy",
content: m5s,
}
});

//Alaska
var m6 = {
type: "multipoint",
points: mparray[5]
};
var m6s = "From what I've been told, Alaska is one of the few untamed areas in the U.S. I would really like to see that." + "<img src='https://www.roughguides.com/wp-content/uploads/2017/01/1-Denali-National-Park-BH4FWY.jpg' alt='Alaskan landscape'>";
var m6g = new Graphic({
geometry: m6,
symbol: sms,
popupTemplate: {
title: "Anchorage, Alaska",
content: m6s,
}
});

//Zurich
var m7 = {
type: "multipoint",
points: mparray[6]
};
var m7s = "Eh, why not." + "<img src='https://moneycrashers-sparkchargemedia.netdna-ssl.com/wp-content/uploads/2017/03/zurich-city-center-1068x600.jpg' alt='Zurich, Switzerland'>";
var m7g = new Graphic({
geometry: m7,
symbol: sms,
popupTemplate: {
title: "Zurich, Switzerland",
content: m7s,
}
});

//Hawaii
var m8 = {
type: "multipoint",
points: mparray[7]
};
var m8s = "I figure I might as well visit, just to say I did." + "<img src='https://singularityhub.com/wp-content/uploads/2018/06/2045-carbon-neutral-pledge-na-pali-coast-kauai-1053409016-1068x601.jpg' alt='Hawaii'>";
var m8g = new Graphic({
geometry: m8,
symbol: sms,
popupTemplate: {
title: "Honolulu, Hawaii",
content: m8s,
}
});

//New Zealand
var m9 = {
type: "multipoint",
points: mparray[8]
};
var m9s = "One ring to rule them all. 'Nuff said." + "<img src='https://www.telegraph.co.uk/content/dam/Travel/Destinations/North%20America/USA/Boston/New%20Zealand%20lead-xlarge.jpg' alt='New Zealand'>";
var m9g = new Graphic({
geometry: m9,
symbol: sms,
popupTemplate: {
title: "New Zealand",
content: m9s,
}
});

//Omaha Beach
var m10 = {
type: "multipoint",
points: mparray[9]
};
var m10s = "My great-great uncle served in WWII and he was one of the soldiers who stormed the beaches in Normandy, specifically Omaha Beach." + "<img src='https://www.dday-overlord.com/wp-content/uploads/2016/02/omaha_beach_debarquement_chars_ruquet-1.jpg' alt='D-Day, Omaha Beach'>";
var m10g = new Graphic({
geometry: m10,
symbol: sms,
popupTemplate: {
title: "Omaha Beach",
content: m10s,
}
});

//Home marker
  var markerSymbol = {
    type: "picture-marker",
    url: "letterA.png",
    width: "40px",
    height: "40px"
  };

  var homestring = "My good ole' home back in Mesa, Arizona." + "<img src='https://d56b293rhv8dp.cloudfront.net/locations/259/cover_images/original/mesa_arizona_1440x960.jpg?1515090188'>";
  var pointGraphic = new Graphic({
    geometry: homepoint,
    symbol: markerSymbol,
    popupTemplate: {
      title: "Home Sweet Home",
      content: homestring
    }
  });

  view.graphics.addMany([pointGraphic,m1g,m2g,m3g,m4g,m5g,m6g,m7g,m8g,m9g,m10g]);
});
