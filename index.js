// packages required
var inquirer = require("inquirer");
var colors = require("colors");
const Shapes = require("./lib/shapes.js");
const validator = require("validator");
const fs = require("fs");
const { log } = require("console");
// shapes for logo
const backgroundShapes = [
    "Circle",
    "Square",
    "Triangle",
    "Rectangle",
]

// Start Generator, help user know what to do. 
function init() {
    console.log("\n This will make a logo for you formatted as an SVG file. Please enter up to 3 letters, then pick a shape and color.");
    createSVG();
  }

// collect the user input for SVG
function createSVG() {
    inquirer.prompt([
      {
        type: 'input',
        message: "\n Enter 1-3 characters",
        name: "text",
        // validate: checkText,
      },
      {
        type: 'input',
        message: "\n Enter the color name (or hexadecimal number) you want your text to appear in",
        name: "textColor",
        // validate: checkColor,
      },
      {
        type: 'list',
        message: "\n Choose a shape:",
        name: "shape",
        choices: backgroundShapes,
      },
      {
        type: 'input',
        message: "\n Enter the color name (or hexadecimal number) you want for your back ground shape",
        name: "shapeColor",
        // validate: checkColor,
      },
    ])
    .then((logo) => {
      const {text, textColor, shape, shapeColor} = logo;
      const svg = new Shapes[shape](text, textColor, shape, shapeColor).render();
      console.log(svg);
      return svg;
    })
    .then((svg) =>
      writeToFile(svg)
    )
    .catch((error) => 
       console.log(error)
    );
  }

  function writeToFile(data) {
    fs.writeFile("./examples/logo.svg", data, (err) =>
      err ? console.log(err) : console.log("\nGenerated logo.svg in the folder ./examples/"));
  }
  




// initialize app
init();