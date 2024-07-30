// packages required
var inquirer = require("inquirer");
var colors = require("colors");
const Shapes = require("./lib/shapes.js");
const validator = require("validator");
const fs = require("fs");
const { log } = require("console");

const backgroundShapes = [
    "Circle",
    "Square",
    "Triangle",
    "Retangle",
]

// Start Generator, help user know what to do. 
function init() {
    console.log("\n This will make a logo for you formatted as an SVG file. Please enter up to 3 letters, then pick a shape and color.");
    createSVG();
  }


// initialize app
init();