# FAQ Accordion

A responsive and accessible FAQ accordion component built with HTML, CSS, and JavaScript.

## Overview

This project is a solution to the Frontend Mentor FAQ Accordion challenge. The goal was to build an interactive FAQ section that closely matches the provided design while maintaining accessibility, responsiveness, and clean code practices.

Users can:

* View frequently asked questions and answers.
* Expand and collapse FAQ items.
* Navigate the accordion using a keyboard.
* Experience a responsive layout across different screen sizes.

## Screenshot

![Project Screenshot](./preview.jpg)

## Links

* Solution URL: Add your Frontend Mentor solution URL here
* Live Site URL: Add your deployed site URL here

## Built With

* Semantic HTML5
* Modern CSS

  * CSS Custom Properties
  * Flexbox
  * Grid
  * Logical Properties
  * Fluid Typography using `clamp()`
* Vanilla JavaScript
* Mobile-first workflow

## Features

### Accessible Accordion

The accordion implementation includes:

* `aria-expanded`
* `aria-controls`
* `aria-labelledby`
* Keyboard accessibility
* Proper use of the `hidden` attribute

### Responsive Design

The layout adapts to different viewport sizes using:

* Fluid spacing
* Responsive typography
* Mobile and desktop background images

### Performance

* Local font loading with `font-display: swap`
* Lightweight JavaScript
* No external dependencies

## Project Structure

```text
.
├── index.html
├── css
│   └── style.css
├── js
│   └── main.js
├── images
│   ├── background-pattern-mobile.svg
│   ├── background-pattern-desktop.svg
│   ├── icon-plus.svg
│   ├── icon-minus.svg
│   ├── icon-star.svg
│   └── favicon-32x32.png
└── fonts
    ├── WorkSans-VariableFont_wght.ttf
    └── WorkSans-Italic-VariableFont_wght.ttf
```

## What I Learned

During this project, I practiced:

* Creating accessible accordion components.
* Managing state with JavaScript and ARIA attributes.
* Using CSS logical properties for better internationalization support.
* Building responsive layouts with modern CSS techniques.
* Improving keyboard navigation and focus states.

Example of the accordion toggle logic:

```js
const isExpanded =
  button.getAttribute("aria-expanded") === "true";

button.setAttribute(
  "aria-expanded",
  String(!isExpanded)
);

answer.hidden = isExpanded;
```

## Continued Development

Future improvements could include:

* Smooth open/close animations.
* Support for opening only one accordion item at a time.
* Additional keyboard navigation shortcuts.
* Dark mode support.

## Author

* GitHub - [Mayank-Garg7](https://github.com/mayank-garg7)
* Frontend Mentor - [@Mayank-Garg7](https://www.frontendmentor.io/profile/Mayank-Garg7)

## Acknowledgments

Thanks to Frontend Mentor for providing realistic frontend challenges that help developers improve their HTML, CSS, and JavaScript skills.
