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




// initialize app
init();