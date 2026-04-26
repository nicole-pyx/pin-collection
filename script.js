console.log("JS connected!");


// Create map
var map = L.map('map').setView([20, 0], 2);

// Add tiles (map background)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);


var pins = [
  {
    id: "nyc",
    location: "NYC, USA",
    coords: [40.7826, -73.9656],
    images: ["images/newyork.JPG"],
    description: "I ❤️ NY"
  },
  {
    id: "kyoto",
    location: "Kyoto, Japan",
    coords: [35.0116, 135.7681],
    images: ["images/kyoto.JPG","images/kyoto2.JPG"],
    description: "so cutie"
  },
  {
    id: "hokkaido",
    location: "Hokkaido, Japan",
    coords: [43.2203, 142.8635],
    images: ["images/hokkaido.JPG","images/hokkaido2.JPG", "images/hokkaido3.JPG", "images/hokkaido4.JPG"],
    description: "hokkaido in the summer"
  }
];