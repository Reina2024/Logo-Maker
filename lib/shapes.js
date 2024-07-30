// make shape class, ensure to incorp to index.js
// lib/shapes.js

// Circle Class
class Circle {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="150" cy="100" r="90" fill="${this.shapeColor}" />
              <text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle" alignment-baseline="central">${this.text}</text>
            </svg>`;
  }
}

// Square Class
class Square {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
              <rect width="300" height="200" fill="${this.shapeColor}" />
              <text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle" alignment-baseline="central">${this.text}</text>
            </svg>`;
  }
}

// Triangle Class
class Triangle {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
              <polygon points="150,10 290,190 10,190" fill="${this.shapeColor}" />
              <text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle" alignment-baseline="central">${this.text}</text>
            </svg>`;
  }
}

// Rectangle Class
class Rectangle {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
              <rect width="300" height="200" fill="${this.shapeColor}" />
              <text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle" alignment-baseline="central">${this.text}</text>
            </svg>`;
  }
}

// Export the classes as an object
module.exports = {
  Circle,
  Square,
  Triangle,
  Rectangle
};
