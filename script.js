console.log("JS connected!");
image: "images/kyoto.jpg"
image: "images/newyork.jpg"

// Create map
var map = L.map('map').setView([20, 0], 2);

// Add tiles (map background)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// kyoto pin
L.marker([35.0116, 135.7681]).addTo(map)
  .bindPopup(`
    <h3>Kyoto, Japan</h3>
    <img src="images/kyoto.JPG" width="200">
    <p>so cutie</p>
  `);

// Nyc pin
L.marker([40.7826, -73.9656]).addTo(map)
  .bindPopup(`
    <h3>NYC, USA</h3>
    <img src="images/newyork.JPG" width="200">
    <p>I❤️NY</p>
  `);