console.log("JS connected!");
image: "images/kyoto.jpg"
image: "images/newyork.jpg"

// Create map
var map = L.map('map').setView([20, 0], 2);

// Add tiles (map background)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// Example pin
L.marker([35.6762, 139.6503]).addTo(map)
  .bindPopup(`
    <h3>Kyoto, Japan</h3>
    <img src="images/kyoto.JPG" width="200">
    <p>My first pin from Japan 🇯🇵</p>
  `);