// Add event, plays sound and add active class

window.addEventListener('keydown', handleEvent);

function handleEvent(e) {
  const sound = document.querySelector(`audio[data-sound='${e.keyCode}']`)
  if(!sound) return;
  sound.currentTime = 0;
  sound.play();

  const key = document.querySelector(`div[data-sound='${e.keyCode}']`);
  key.classList.add('active');
}


// Removing active class
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeActive));

function removeActive(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('active');
}

//Touch events

keys.forEach(key => key.addEventListener('touchstart', handleTouch));

function handleTouch(e) {
  const dataValue = this.getAttribute('data-sound');
  const sound = document.querySelector(`audio[data-sound='${dataValue}']`)

  sound.currentTime = 0;
  sound.play();

  const key = document.querySelector(`div[data-sound='${dataValue}']`);
  key.classList.add('active');
}


