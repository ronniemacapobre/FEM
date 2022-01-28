const hamburger = document.querySelector('#hamburger');
const close = document.querySelector('#close');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', (e) => {
  console.log('hamburger clicked');

  hamburger.classList.toggle('close');
  close.classList.toggle('close');
  overlay.classList.toggle('close');
});

close.addEventListener('click', (e) => {
  hamburger.classList.toggle('close');
  close.classList.toggle('close');
  overlay.classList.toggle('close');
});
