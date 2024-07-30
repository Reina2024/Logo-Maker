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
        validate: checkText,
      },
      {
        type: 'input',
        message: "\n Enter the color name (or hexadecimal number) you want your text to appear in",
        name: "textColor",
        validate: checkColor,
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
        validate: checkColor,
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
// Write data to the examples folder
  function writeToFile(data) {
    fs.writeFile("./examples/logo.svg", data, (err) =>
      err ? console.log(err) : console.log("\n You can find you generated logo.svg in the folder ./examples/"));
  }
  
// funtion to check if the color input is a color name, hexadecimal or if empty return error message
const Color = require('color');

function checkColor(str) {
  try {
    Color(str); // Try to create a Color object
    if (str.trim() === '') {
      return "Please enter a color name or hexadecimal value.";
    }
    return true;
  } catch (error) {
    return "Invalid color. Enter a valid color name or a 3 or 6 digit hexadecimal (0-9, A-F) number.";
  }
}

  
  
// function to check if correct number of text characters entered
function checkText(str) {
    if (!validator.isEmpty(str.trim()) && str.trim().length < 4) {
      return true;
    }
    return "Please enter three characters";
}


// initialize app
init();
