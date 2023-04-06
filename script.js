
let map;
    
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0, lng: 0 },
    zoom: 2,
  });
}

function showError(msg) {
  const errorDiv = document.createElement("div");
  errorDiv.classList.add("error");
  errorDiv.textContent = msg;
  document.body.insertBefore(errorDiv, document.body.firstChild);
}

function showLocationsOnMap() {
  const location1 = document.getElementById("location1").value.trim();
  const location2 = document.getElementById("location2").value.trim();
  const location3 = document.getElementById("location3").value.trim();

  if (!location1 && !location2 && !location3) {
    showError("Please enter at least one location.");
    return;
  }

  const geocoder = new google.maps.Geocoder();

  
  if (location1) {
    geocoder.geocode({ address    : location1 }, (results, status) => {
  if (status === "OK") {
    new google.maps.Marker({
      position: results[0].geometry.location,
      map,
      title: location1,
    });
    map.setCenter(results[0].geometry.location);
  } else {
    showError(`Failed to geocode location 1: ${status}`);
  }
});
}
 
if (location2) {
geocoder.geocode({ address: location2 }, (results, status) => {
if (status === "OK") {
new google.maps.Marker({
position: results[0].geometry.location,
map,
title: location2,
});
map.setCenter(results[0].geometry.location);
} else {
showError(`Failed to geocode location 2: ${status}`);
}
});
}

if (location3) {
geocoder.geocode({ address: location3 }, (results, status) => {
if (status === "OK") {
new google.maps.Marker({
position: results[0].geometry.location,
map,
title: location3,
});
map.setCenter(results[0].geometry.location);
} else {
showError(`Failed to geocode location 3: ${status}`);
}
});
}
}

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
event.preventDefault();
showLocationsOnMap();
});

initMap();

    
