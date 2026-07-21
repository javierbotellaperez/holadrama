// Lista de saludos con sus códigos de idioma para Google Translate
const greetings = [
  { text: "hola", lang: "es" },
  { text: "hello", lang: "en" },
  { text: "fáilte", lang: "ga" },
  { text: "bonjour", lang: "fr" },
  { text: "ciao", lang: "it" },
  { text: "こんにちは", lang: "ja" },
  { text: "你好", lang: "zh-CN" },
  { text: "olá", lang: "pt" },
  { text: "hallo", lang: "de" },
  { text: "नमस्ते", lang: "hi" },
  { text: "γεια σας", lang: "el" },
  { text: "merhaba", lang: "tr" },
  { text: "salut", lang: "ro" },
  { text: "hej", lang: "sv" },
  { text: "cześć", lang: "pl" },
  { text: "szia", lang: "hu" },
  { text: "أهلاً", lang: "ar" },
  { text: "안녕하세요", lang: "ko" },
  { text: "สวัสดี", lang: "th" },
  { text: "привіт", lang: "uk" }
];

const track = document.getElementById("ticker");

// Aplicar la clase 'notranslate' al contenedor para congelar los nombres de los idiomas
if (track) {
  track.classList.add("notranslate");
}

function translatePage(langCode) {
  const select = document.querySelector(".goog-te-combo");
  if (select) {
    select.value = langCode;
    select.dispatchEvent(new Event("change"));
  }
}

function populateTicker() {
  if (!track) return;
  
  // Duplicamos la lista varias veces para asegurar un flujo continuo e infinito
  const loopList = [...greetings, ...greetings, ...greetings, ...greetings];
  
  loopList.forEach((item) => {
    const span = document.createElement("span");
    span.textContent = item.text;
    span.classList.add("greeting-item", "notranslate");
    
    span.addEventListener("click", () => {
      translatePage(item.lang);
    });

    track.appendChild(span);
  });
}

populateTicker();
