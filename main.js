let buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    event.stopPropagation();
    this.previousElementSibling.classList.toggle('show-text');
  });
}

const one = document.querySelector('#one');
  one.addEventListener('click', function() {
    window.location = 'https://sgroi-l.github.io/hobby-page/';
  });

const two = document.querySelector('#two');
  two.addEventListener('click', function() {
    window.location = 'https://sgroi-l.github.io/movie-data/';
  });

const three = document.querySelector('#three');
  three.addEventListener('click', function() {
    window.location = 'https://sgroi-l.github.io/website/';
  });

const four = document.querySelector('#four');
  four.addEventListener('click', function() {
    window.location = 'https://sgroi-l.github.io/bug-game/';
  });