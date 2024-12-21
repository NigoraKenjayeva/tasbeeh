let count = 0;
const beepSound = new Audio('/audio/beep-04.mp3'); 
const clickSound = new Audio('/audio/mixkit-select-click-1109.wav'); 
const counterDisplay = document.getElementById('counter');
const tasbeehButton = document.getElementById('tasbeeh-button');
tasbeehButton.addEventListener('click', () => {
  count++;
  counterDisplay.textContent = count;
  clickSound.play();
  if (count % 100 === 0) { 
    beepSound.play();
  }
});
