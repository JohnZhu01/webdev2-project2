# Web Development 2 Project 2

Responsive static website built with HTML, Sass, and JavaScript.

Original website reference: https://www.kvant.co/

## Project Structure

- `index.html` - main page markup
- `scss/` - Sass source files
- `scripts/` - JavaScript modules
- `images/` - image assets
- `media/` - video assets
- `styles/` - compiled CSS output

## Sass

Compile Sass with:

```bash
sass scss/styles.scss styles/styles.css --style=expanded
```

The compiled `styles/` folder is generated locally and should not be committed.

## JavaScript

JavaScript is split by feature:

- `scripts/header.js` - header navigation and language menu
- `scripts/ourClients.js` - clients carousel
- `scripts/scripts.js` - entry file
