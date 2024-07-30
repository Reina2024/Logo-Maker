// Import the shape classes
const { Circle, Square, Triangle, Rectangle } = require('../lib/shapes.js'); 

// Tests for shape classes
describe('Shape Classes', () => {

  // test circle class, include selected text and colors
  test('Circle should render correctly with given properties', () => {
    const circle = new Circle('ABC', '#FFFFFF', '#000000');
   
    // render the svg string for circle
  const svg = circle.render();
    
  // verfiy the svg contians the right elements
    expect(svg).toContain('<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">');
    expect(svg).toContain('<circle cx="150" cy="100" r="90" fill="#000000" />');
    expect(svg).toContain('<text x="50%" y="50%" fill="#FFFFFF" text-anchor="middle" alignment-baseline="central">ABC</text>');
  });

  // Test for square class, include selcetd text and colors
  test('Square should render correctly with given properties', () => {
    const square = new Square('XYZ', '#FF00FF', '#00FF00');
    // render the svg string for square
    const svg = square.render();

    // verfiy the svg contians the right elements
    expect(svg).toContain('<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">');
    expect(svg).toContain('<rect width="300" height="200" fill="#00FF00" />');
    expect(svg).toContain('<text x="50%" y="50%" fill="#FF00FF" text-anchor="middle" alignment-baseline="central">XYZ</text>');
  });


  // test for triangle class include selected text and colors
  test('Triangle should render correctly with given properties', () => {
    const triangle = new Triangle('123', '#00FFFF', '#FF0000');
    // render the svg string for triangle
    const svg = triangle.render();

 // verfiy the svg contians the right elements
    expect(svg).toContain('<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">');
    expect(svg).toContain('<polygon points="150,10 290,190 10,190" fill="#FF0000" />');
    expect(svg).toContain('<text x="50%" y="50%" fill="#00FFFF" text-anchor="middle" alignment-baseline="central">123</text>');
  });

  //  test for rectangle class, include selected text and colors
  test('Rectangle should render correctly with given properties', () => {
    const rectangle = new Rectangle('456', '#0000FF', '#FFFF00');
    // render the svg string for rectangle
    const svg = rectangle.render();

     // verfiy the svg contians the right elements
    expect(svg).toContain('<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">');
    expect(svg).toContain('<rect width="300" height="200" fill="#FFFF00" />');
    expect(svg).toContain('<text x="50%" y="50%" fill="#0000FF" text-anchor="middle" alignment-baseline="central">456</text>');
  });

});
