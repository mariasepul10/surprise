const messageBox = document.getElementById("messageBox");

// Diccionario de mensajes
const messages = {
  nico: [
    "Te quiero mucho whisking 🧡",
    "Eres el mejor novio del mundo",
    "Te quiero a mi lado todos los días",
    "Qué suerte la mía de tenerte fetidooo 💋",
    "Eres el unico hetero que me gusta jaja",
    "Golden retriver energy 🐶 = BLOCKEAR",
    "Ratón lucha por tus sueños",
    "* se depelleja los labios *",
    "A llorar a la llorería 😭",
    "necesito pensar unas cositas en japón ⛩️🌸"
    
  ],
  pc: [
    "15🔥New messages from Jose del Águila",
    "NEW MESSAGE from Maria Ratona: i miss you",
    "🔔 You have a new follower: @marytravels",
    "Actualizando ...99% completado",
    "Contigo no hay errores en el sistema ❤️ ",
    "📞 zoom meeting con Michaelo Pelapoller",
    "💌: FELIZ CUM NICO!!! 🎉🎂🎁",
    " https://www.youtube.com/@NicolasMeseguer",
  ],
  gato: [
    "miauu",
    "prrrrrr",
    "meeeew",
    "onii-chaan",
    "Saturno: eres mi humano favorito 🐾",
    "Adoptaría mil gatos contigo ❤️",
    "* 🪐Saturno se ha colado *",
     " ♩ ♫ Seré la gata bajo la lluvia ♫ ♩",
    "zZzZzZz"
  ],
  bebida: [
    "Contigo no necesito cafeína ☕💜",
    "Tú eres mi mejor energía cada mañana 🌞",
    "Empezamos dieta de recorte con un MONSTER",
    "Un MONSTER contigo y ya soy feliz ❤️",
    "NO dejes de darme la lata nicooo",
    "Sin ti me siento descafeinado ...😞",
    "*remembering la torre de monsters*",
  
  ]

};

// Diccionario de sonidos
const sounds = {
  nico: new Audio('mousesound.mp3'),
  pc: new Audio('mousesound.mp3'),
  gato: new Audio('meow.mp3'),
  bebida: new Audio('canopen.mp3')
};

const recentMessages = {
  nico: [],
  pc: [],
  gato: [],
  bebida: []
};

const RECENT_LIMIT = 4;

function showRandomMessage(type) {
  const options = messages[type];
  const recent = recentMessages[type];

  const filtered = options.filter(msg => !recent.includes(msg));
  const candidates = filtered.length > 0 ? filtered : options;
  const randomIndex = Math.floor(Math.random() *candidates.length);
  const randomMessage = candidates[randomIndex];

  messageBox.innerText = randomMessage;
  messageBox.style.display = "block";

  // Reproducir sonido
  if (sounds[type]) {
    sounds[type].currentTime = 0; // Reinicia el sonido si se hace clic varias veces
    sounds[type].play();
  }

  recent.push(randomMessage);
  if (recent.length > RECENT_LIMIT) {
    recent.shift();
  }

  if (window.hideMessageTimeout) {
    clearTimeout(window.hideMessageTimeout);
  }
  window.hideMessageTimeout = setTimeout(() => {
    messageBox.style.display = "none";
  }, 7000);
}
