const HANCOCK_LOCATION  = {lat: 41.7227  , lng: -73.93463 }; // Hancock Center
const HOME_LOCATION     = {lat: 41.150047, lng: -73.269774}; // CT Home
const HALF_WAY_LOCATION = {lat: 41.389200, lng: -73.593146}; // half way between Hancock and CT Home
// 41.389200, -73.593146

function initialize() {

  // options for the map
  var options = {
    center: HALF_WAY_LOCATION,
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  // link up the map element and the map from Google's JS API
  var map = new google.maps.Map(document.getElementById("map"), options);

  // create the marker pin thingy
  var hancockMarker = new google.maps.Marker({
      position: HANCOCK_LOCATION,
      animation: google.maps.Animation.DROP,
      map: map
  });

  // create the content for the window
  var hancockWindow = new google.maps.InfoWindow({
      content: "<p>Hancock Center, where the magic happens</p>"
  });

  // load the window when the marker is clicked
  hancockMarker.addListener('click', function() { hancockWindow.open(map, hancockMarker) });

  // create home marker
  var homeMarker = new google.maps.Marker({
      position: HOME_LOCATION,
      animation: google.maps.Animation.DROP,
      map: map
  });

  // create home window
  var homeWindow = new google.maps.InfoWindow({
      content: "<p>My Home, the humble abode.</p>"
  });

  // make sure the window opens when the marker's clicked
  homeMarker.addListener('click', function() { homeWindow.open(map, homeMarker) });
}
