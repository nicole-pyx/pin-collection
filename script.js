console.log("JS connected!");
image: "images/kyoto.jpg"
image: "images/newyork.jpg"


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

let currentImages = [];
let currentIndex = 0;

function showNext() {
  currentIndex = (currentIndex + 1) % currentImages.length;
  document.getElementById("popup-img").src = currentImages[currentIndex];
}

function showPrev() {
  currentIndex =
    (currentIndex - 1 + currentImages.length) % currentImages.length;
  document.getElementById("popup-img").src = currentImages[currentIndex];
}

// japan pins
var pin = {
  location: "Kyoto, Japan",
  coords: [35.0116, 135.7681],
  images: [
    "images/kyoto.JPG",
    "images/kyoto2.JPG",
  ],
  description: "so cutie"
};

var pin = {
  location: "Hokkaido, Japan",
  coords: [43.2203, 142.8635],
  images: [
    "images/hokkaido.JPG",
    "images/hokkaido2.JPG",
    "images/hokkaido3.JPG",
    "images/hokkaido4.JPG"
  ],
  description: "hokkaido in the summer"
};

currentImages = pin.images;
currentIndex = 0;

L.marker(pin.coords).addTo(map)
  .bindPopup(`
    <h3>${pin.location}</h3>
    <img id="popup-img" src="${pin.images[0]}" width="200">
    <br><br>
    <button onclick="showPrev()">⬅️</button>
    <button onclick="showNext()">➡️</button>
    <p>${pin.description}</p>
  `);