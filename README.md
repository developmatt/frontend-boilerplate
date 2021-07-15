# Frontend Boilerplate

Save time by avoiding building an entire boilerplate and other less important things and focusing on software development.

This repository builds a complete environment with all the configurations for building a frontend website with JavaScript transpilation, Sass building, image compression and live reload.

All this in a very simple and fast way. So, lets start coding!

## Getting Started
 
 1. Clone the repository `git clone git@github.com:developmatt/frontend-boilerplate.git`
 2. Enter the repository directory
 3. Install dependencies `npm install`
 4. Delete .git directory `rm -rf .git`
 5. Done! Just use the npm commands to start coding

[NodeJs](https://nodejs.org/en/) is required.

PS: We recommend run command `npm run build`

## NPM Commands
There are two default npm commands to help your software development:
 - `npm run start`: Start the live reload server with html, js and css realtime building.
 - `npm run build`: Build JS, SCSS, HTML and compress images (but not run a server) - **run it everytime you insert a new image**.
 
## Gulp tasks
This is the tasks available in `gulpfile.js` **but you do not have to use directly**. We recomend the commands show in **NPM Commands** topic

### Styles (gulp styles)
Build styles from `src/assets/scss/index.scss` to `dist/assets/css/style.min.css`

### Scripts (gulp scripts)
Build scripts from `src/assets/js/index.js` from `dist/assets/js/scripts.min.js`.
If the `env` node variable is `production` the webpack build process will be set to production mode.

### Images (gulp images)
Compress all images from `src/assets/images` to `dist/assets/images` (may take too long - be careful using it). **Run it everytime you insert a new image**.

### HTML (gulp html)
Copy the html files from `src/html` to `dist` to allow the liveserver load index file from the start.