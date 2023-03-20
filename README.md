# ReadmeFile: Project Galleryt

## Overview

This project aims to build a gallery which displays the projects I've been working on.  Using HTML, CSS, and JavaScript. The projects are displayed as cards, and each card has a title and a brief description of the project. The user can click on the 'About' button to see more information about the project. The purpose of this project is to show an understanding of repsonsiveness and layout options.

## Planning

I planned for this page to be clean and simple. A heading with four cards and no unneccesary text or background images. The cards should have some interactivity which will give more information on the project and be clickable to redirect to the project page. 

## Building

The cards were input with HTML, they consist of sections, containing divs and a button. 

The cards are inside a flexbox which controls the layout of each card on the page. 

Media queries are used to keep the page responsive at different screen widths and to ensure that the cards display as a single column on mobile devices.

I used a JavaScript loop to add event listeners to each button on the page which calls a function that shows the description text. 

Each card also links to the project URL when clicked, I added this in JavaScript using `window.location`.


## Debugging

When clicking the 'about' button, the user would be redirected to the project page, I needed to stop this event from firing as otherwise it wouln't be possible to read the description of each project. After learning about event propagation I realised that I could call the `stopPropagation()` method onto the buttons which would stop them sending the 'click' event further up the tree and triggering the cards link.