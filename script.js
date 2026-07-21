const greetings = [
  "Hola",
  "Hello",
  "Bonjour",
  "Ciao",
  "Olá",
  "Hallo",
  "Konnichiwa",
  "Ni Hao",
  "Cześć",
  "Namaste"
];

let currentIndex = 0;
const greetingElement = document.getElementById("greeting");

function changeGreeting() {
  // 1. Animamos la palabra saliente
  greetingElement.classList.add("slide-out");

  setTimeout(() => {
    // 2. Cambiamos el texto y lo posicionamos abajo de forma invisible
    currentIndex = (currentIndex + 1) % greetings.length;
    greetingElement.textContent = greetings[currentIndex];
    greetingElement.classList.remove("slide-out");
    greetingElement.classList.add("slide-in-prepare");

    // 3. Animamos la entrada
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        greetingElement.classList.remove("slide-in-prepare");
      });
    });
  }, 500); // Coincide con el tiempo de transición CSS (.5s)
}

// Cambia la palabra cada 2.5 segundos
setInterval(changeGreeting, 2500);
