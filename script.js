let speech = new SpeechSynthesisUtterance(); //API
let voices = [];
let voiceSelect = document.querySelector("select"); //Select voice

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices(); //Go through the various available voices
  speech.voice = voices[0];
  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

voiceSelect.addEventListener("change", () => { //Change voice
  speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => { //Select voice function
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
