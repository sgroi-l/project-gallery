// Selects all the buttons on the page and adds a click event listener to them.
let buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    // Stops the event from propagating further up the DOM tree, allowing the button to be pressed without opening the link.
    event.stopPropagation();
    // Toggles the class 'show-text' on the previous sibling element of the button that was clicked.
    this.previousElementSibling.classList.toggle('show-text');
  });
}

// Selects the four buttons on the page and adds a click event listener to each one, redirecting to the projects page.
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