console.log("JS connected!");


// Create map
var map = L.map('map').setView([20, 0], 2);

// Add tiles (map background)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);


// Nyc pin
L.marker([40.7826, -73.9656]).addTo(map)
  .bindPopup(`
    <h3>NYC, USA</h3>
    <img src="images/newyork.JPG" width="200">
    <p>I❤️NY</p>
  `);

