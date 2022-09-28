// JavaScript Code for the acronyms!

// HTML Variables
let acronymAnswer = document.getElementById("acro-ans");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let question = document.getElementById("acro-in").value.toLowerCase();

  // If Statement - Test the input
  if (question === "gui") {
    acronymAnswer.innerHTML = " 'Graphical User Interface'.";
  } else if (question === "css") {
    acronymAnswer.innerHTML = " 'Cascading Style Sheets'.";
} else if (question === "html") {
    acronymAnswer.innerHTML = " 'Hyper Text Markup Link'.";
} else if (question === "js") {
    acronymAnswer.innerHTML = " 'JavaScript'.";
} else if (question === "vsc") {
    acronymAnswer.innerHTML = " 'Visual Studio Code'.";
} else if (question === "pat") {
    acronymAnswer.innerHTML = " 'Provincial Achievement Test'.";
} else if (question === "gg") {
    acronymAnswer.innerHTML = " 'Good Game'.";
} else if (question === "gl") {
    acronymAnswer.innerHTML = " 'Good Luck'.";
} else if (question === "hf") {
    acronymAnswer.innerHTML = " 'Have Fun'.";
} else if (question === "dmc") {
    acronymAnswer.innerHTML = " 'Devil May Cry'.";
} else if (question === "ds") {
    acronymAnswer.innerHTML = " 'Dark Souls'.";
} else if (question === "gif") {
    acronymAnswer.innerHTML = " 'Graphics Interchange Format'.";
} else if (question === "ty") {
    acronymAnswer.innerHTML = " 'Thank You'.";
} else if (question === "brb") {
    acronymAnswer.innerHTML = " 'Be Right Back'.";
} else if (question === "mc") {
    acronymAnswer.innerHTML = " 'Minecraft'.";
} else if (question === "ms") {
    acronymAnswer.innerHTML = " 'Microsoft'.";
} else if (question === "ct") {
    acronymAnswer.innerHTML = " 'Counter Terrorist'.";
} else if (question === "fj") {
    acronymAnswer.innerHTML = " 'FranzJ'.";
} else if (question === "ttv") {
    acronymAnswer.innerHTML = " 'Twitch Television'.";
} else if (question === "csgo" || question === "cs:go") {
    acronymAnswer.innerHTML = " 'Counter Strike:Global Offense'.";
} else if (question === "ps") {
    acronymAnswer.innerHTML = " 'PlayStation' or 'Postscript'.";
} else if (question === "dp") {
    acronymAnswer.innerHTML = " 'Daft Punk'.";
} else if (question === "afk") {
    acronymAnswer.innerHTML = " 'Away From Keyboard'.";
} else if (question === "lol") {
    acronymAnswer.innerHTML = " 'Laugh/Laughing Out Loud'.";
} else if (question === "yolo") {
    acronymAnswer.innerHTML = " 'You Only Live Once'.";
} else if (question === "idk") {
    acronymAnswer.innerHTML = " 'I Don't Know'.";
} else if (question === "ik") {
    acronymAnswer.innerHTML = " 'I Know'.";
} else if (question === "ikr") {
    acronymAnswer.innerHTML = " 'I Know, Right'.";
} else if (question === "rofl") {
    acronymAnswer.innerHTML = " 'Rolling On Floor Laughing'.";
} else if (question === "nasa") {
    acronymAnswer.innerHTML = " 'National Aeronautics and Space Administration'.";
} else if (question === "swat") {
    acronymAnswer.innerHTML = " 'Special Weapons And Tactics'.";
} else if (question === "css") {
    acronymAnswer.innerHTML = " 'Cascading Style Sheets'.";
} else {
    acronymAnswer.innerHTML = " something? I'm not sure!";
  }
}