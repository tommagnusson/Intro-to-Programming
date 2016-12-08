function initialize() {
  var options = {
    center: {lat: 41.7227 , lng: -73.93463},
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map"), options);
}
