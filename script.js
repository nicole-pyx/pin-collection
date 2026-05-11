console.log("JS connected!");

Intl.DateTimeFormat()

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
    timezone: "America/New_York",
    coords: [40.7826, -73.9656],
    images: [{src: "images/newyork.JPG"}],
    description: "I ❤️ NY"
  },
  {
    id: "kyoto",
    location: "Kyoto, Japan",
    timezone: "Asia/Tokyo",
    coords: [35.0116, 135.7681],
    images: [{src: "images/kyoto.JPG"},{src: "images/kyoto2.JPG"}],
    description: "so cutie"
  },
  {
    id: "hokkaido",
    location: "Hokkaido, Japan",
    timezone: 'Asia/Tokyo',
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

  loadWeather(pin);
  loadTime(pin);
}

pins.forEach(pin => {

  L.marker(pin.coords)
    .addTo(map)
    .on('click', () => {
      openSidebar(pin);
    });

});


async function loadWeather(pin) {

  try {

    const apiKey = "aa69d0a72d3e5baddd115229f265b3d7";

    const lat = pin.coords[0];
    const lon = pin.coords[1];

    const url =
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

    if (data.cod !== 200) {
      document.getElementById("weather").innerHTML =
        `<p>Weather unavailable</p>`;
      return;
    }

    const temp = data.main.temp;
    const weather = data.weather[0].description;
    const icon = data.weather[0].icon;

    document.getElementById("weather").innerHTML = `
      <h3>🌤 Weather</h3>
      <p>${temp}°C • ${weather}</p>
    `;

  } catch (error) {

    console.error(error);

  }
}

function loadTime(pin) {

  const time = new Intl.DateTimeFormat('en-US', {
    timeZone: pin.timezone,
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(new Date());

  document.getElementById("time").innerHTML = `
    <h3>🕒 Local Time</h3>
    <p>${time}</p>
  `;
}