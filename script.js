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
    images: [{src: "images/newyork.JPG"}],
    description: "I ❤️ NY"
  },
  {
    id: "kyoto",
    location: "Kyoto, Japan",
    coords: [35.0116, 135.7681],
    images: [{src: "images/kyoto.JPG"},{src: "images/kyoto2.JPG"}],
    description: "so cutie"
  },
  {
    id: "hokkaido",
    location: "Hokkaido, Japan",
    coords: [43.2203, 142.8635],
    images: [
      {src: "images/hokkaido.JPG", text: "Hokkaido bird 🐦"},
      {src: "images/hokkaido2.JPG", text: "Biei 🎋"},
      {src: "images/hokkaido3.JPG", text: "Furano 🪻"},
      {src: "images/hokkaido4.JPG", text: "Noboribetsu ♨️"}
    ],
    description: "hokkaido in the summer"
  }
];

function openSidebar(pin) {
  document.getElementById("title").innerText = pin.location;
  document.getElementById("desc").innerText = pin.description;

  document.getElementById("gallery").innerHTML =
  pin.images.map(img => `
    <div class="img-container">
      <img src="${img.src}">
      ${img.text ? `<div class="tooltip">${img.text}</div>` : ""}
    </div>
    `).join("");
}

pins.forEach(pin => {

  L.marker(pin.coords)
    .addTo(map)
    .on('click', () => {
      openSidebar(pin);
    });

});


