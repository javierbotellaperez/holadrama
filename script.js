const greetings = [
  { text: "Hola", class: "font-es" },
  { text: "Bonjour", class: "font-fr" },
  { text: "Ciao", class: "font-it" },
  { text: "こんにちは", class: "font-jp" }, // Japonés
  { text: "你好", class: "font-cn" },       // Chino
  { text: "Namaste", class: "font-hi" },    // Hindi / Caligrafía
  { text: "Hello", class: "font-es" },
  { text: "Olá", class: "font-fr" }
];

const track = document.getElementById("ticker");

function populateTicker() {
  // Duplicamos la lista para que la animación fluida sea 100% infinita y sin saltos
  const fullList = [...greetings, ...greetings];

  fullList.forEach((item) => {
    const span = document.createElement("span");
    span.textContent = item.text;
    span.classList.add("greeting-item", item.class);
    track.appendChild(span);
  });
}

populateTicker();
