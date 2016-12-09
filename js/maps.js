const HERE = {lat: 41.7227 , lng: -73.93463};

function initialize() {
  var options = {
    center: HERE,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map"), options);
  var marker = new google.maps.Marker({
      position: HERE,
      animation: google.maps.Animation.DROP,
      map: map
  });

  var window = new google.maps.InfoWindow({
      content: "Our Fearless Leader" // <img src='https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/3/000/004/363/3ff8ce2.jpg'></img>"
  });
  marker.addListener('click', function() { window.open(map, marker)});
}
