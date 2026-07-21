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

// Abrir secciones de las esquinas
function openSection(sectionId) {
  const overlay = document.getElementById("modal-overlay");
  const sections = document.querySelectorAll(".section-content");
  
  sections.forEach(sec => sec.classList.remove("active"));
  
  const targetSection = document.getElementById(`sec-${sectionId}`);
  if (targetSection) {
    targetSection.classList.add("active");
    overlay.classList.add("active");
  }
}

// Cerrar ventanas
function closeSection() {
  const overlay = document.getElementById("modal-overlay");
  overlay.classList.remove("active");
}

populateTicker();
