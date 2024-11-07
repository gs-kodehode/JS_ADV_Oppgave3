const panel = document.querySelector("#panel");
const soundMapping = {
  clap: "w",
  hihat: "q",
  kick: "e",
  openhat: "s",
  ride: "v",
  snare: "p",
  tink: "m",
  tom: "o",
};
for (let sound in soundMapping) {
  // ved brukt av for in loop
  const soundBlock = document.createElement("div"); //lage btn og legge flex og column
  soundBlock.classList.add("soundBox"); // Lage class
  const icon = document.createElement("img"); // lage bilder
  icon.src = `./images/${sound}.jpg`; // legge bilder
  icon.classList.add("photo"); // class
  icon.style.height = "100px";
  icon.style.width = "100px";
  // Lager et nytt <p>-element, og setter første bokstav til stor, der legger til en CSS-klasse til "title"!
  const soundLabel = document.createElement("p");
  soundLabel.textContent = `${sound[0].toUpperCase()}${sound.slice(1)}`;
  soundLabel.classList.add("title");
  // Lager en knapp med klassen "soundButton", setter tekstinnholdet til verdien fra soundMapping, og justerer skriftstørrelsen!
  const triggerButton = document.createElement("btn");
  triggerButton.classList.add("soundButton");
  triggerButton.textContent = soundMapping[sound];
  triggerButton.style.fontSize = "2rem";
  // Legger til en klikkhendelse på bildet som spiller av lyden når jeg klikke!
  icon.addEventListener("click", () => {
    new Audio(`./sounds/${sound}.wav`).play();
  });
  // Legge til bilde, tekst og knapp
  soundBlock.append(icon, soundLabel, triggerButton);
  panel.append(soundBlock);
}
// Spiller av lyd når tast ble trykke, basert på soundMapping
window.addEventListener("keydown", (event) => {
  for (let sound in soundMapping) {
    if (event.key === soundMapping[sound]) {
      new Audio(`./sounds/${sound}.wav`).play();
      break;
    }
  }
});
