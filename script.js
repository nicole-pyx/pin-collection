console.log("JS connected!");

// Create map
var map = L.map('map').setView([20, 0], 2);

// Add tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// Pin data (IMPORTANT: use ARRAY, not single var)
var pins = [
  {
    location: "NYC, USA",
    coords: [40.7826, -73.9656],
    images: ["images/newyork.JPG"],
    description: "I ❤️ NY"
  },
  {
    location: "Kyoto, Japan",
    coords: [35.0116, 135.7681],
    images: ["images/kyoto.JPG", "images/kyoto2.JPG"],
    description: "So cute"
  },
  {
    location: "Hokkaido, Japan",
    coords: [43.2203, 142.8635],
    images: [
      "images/hokkaido.JPG",
      "images/hokkaido2.JPG",
      "images/hokkaido3.JPG",
      "images/hokkaido4.JPG"
    ],
    description: "Hokkaido in the summer"
  }
];

// image state per popup
let imageState = {};

pins.forEach(pin => {

  imageState[pin.location] = {
    index: 0,
    images: pin.images
  };

  L.marker(pin.coords).addTo(map)
    .bindPopup(`
      <h3>${pin.location}</h3>
      <img id="img-${pin.location}" src="${pin.images[0]}" width="200">
      <br><br>
      <button onclick="prev('${pin.location}')">⬅️</button>
      <button onclick="next('${pin.location}')">➡️</button>
      <p>${pin.description}</p>
    `);

});

// carousel functions
function next(city) {
  let data = imageState[city];
  data.index = (data.index + 1) % data.images.length;
  document.getElementById(`img-${city}`).src = data.images[data.index];
}

function prev(city) {
  let data = imageState[city];
  data.index = (data.index - 1 + data.images.length) % data.images.length;
  document.getElementById(`img-${city}`).src = data.images[data.index];
}

