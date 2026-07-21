// Lista de saludos
const greetings = [
  "Hola",
  "Hello",
  "Bonjour",
  "Ciao",
  "こんにちは", // Japonés
  "你好",       // Chino
  "Olá",
  "Hallo"
];

const track = document.getElementById("ticker");

function populateTicker() {
  const fullList = [...greetings, ...greetings];
  fullList.forEach((text) => {
    const span = document.createElement("span");
    span.textContent = text;
    span.classList.add("greeting-item");
    track.appendChild(span);
  });
}

populateTicker();