// Lista de saludos en minúsculas con sus grafías nativas
const greetings = [
  "hola",          // Español
  "hello",         // Inglés
  "fáilte",        // Irlandés (Gaélico)
  "bonjour",       // Francés
  "ciao",          // Italiano
  "こんにちは",     // Japonés (Hiragana)
  "你好",          // Chino (Simplificado)
  "olá",           // Portugués
  "hallo",         // Alemán / Holandés
  "नमस्ते",        // Hindi (Devanagari)
  "γεια σας",      // Griego (Alfabeto griego)
  "merhaba",       // Turco
  "salut",         // Rumano
  "hej",           // Sueco / Danés
  "cześć",         // Polaco
  "szia",          // Húngaro
  "أهلاً",         // Árabe (Alfabeto árabe)
  "안녕하세요",     // Coreano (Hangul)
  "สวัสดี",        // Tailandés (Alfabeto tailandés)
  "привіт"        // Ucraniano (Cirílico)
];

const track = document.getElementById("ticker");

function populateTicker() {
  // Duplicamos la lista para asegurar el bucle continuo al hacer scroll
  const fullList = [...greetings, ...greetings];
  fullList.forEach((text) => {
    const span = document.createElement("span");
    span.textContent = text;
    span.classList.add("greeting-item");
    track.appendChild(span);
  });
}

populateTicker();
