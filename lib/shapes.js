// make shape class, ensure to incorp to index.js
// Circle Class
class Circle {
    constructor(text, textColor, shapeColor) {
      this.text = text;
      this.textColor = textColor;
      this.shapeColor = shapeColor;
    }
//   circle render 
    render() {
      return `<svg width="100" height="100">
                <circle cx="50" cy="50" r="40" fill="${this.shapeColor}" />
                <text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle" alignment-baseline="central">${this.text}</text>
              </svg>`;
    }
  }
//   Square Class
  class Square {
    constructor(text, textColor, shapeColor) {
      this.text = text;
      this.textColor = textColor;
      this.shapeColor = shapeColor;
    }
//   Square render
    render() {
      return `<svg width="100" height="100">
                <rect width="100" height="100" fill="${this.shapeColor}" />
                <text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle" alignment-baseline="central">${this.text}</text>
              </svg>`;
    }
  }
//   Triangle Class
  class Triangle {
    constructor(text, textColor, shapeColor) {
      this.text = text;
      this.textColor = textColor;
      this.shapeColor = shapeColor;
    }
//   Triangle Render
    render() {
      return `<svg width="100" height="100">
                <polygon points="50,15 100,85 0,85" fill="${this.shapeColor}" />
                <text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle" alignment-baseline="central">${this.text}</text>
              </svg>`;
    }
  }
//   Rectangle Class
  class Rectangle {
    constructor(text, textColor, shapeColor) {
      this.text = text;
      this.textColor = textColor;
      this.shapeColor = shapeColor;
    }
//   Rectangle Render
    render() {
      return `<svg width="120" height="80">
                <rect width="120" height="80" fill="${this.shapeColor}" />
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
  