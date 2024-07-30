const { Circle, Square, Triangle, Rectangle } = require('../lib/shapes.js'); 

describe('Shape Classes', () => {

  test('Circle should render correctly with given properties', () => {
    const circle = new Circle('ABC', '#FFFFFF', '#000000');
    const svg = circle.render();
    
    expect(svg).toContain('<svg width="300" height="200">');
    expect(svg).toContain('<circle cx="150" cy="100" r="90" fill="#000000" />');
    expect(svg).toContain('<text x="50%" y="50%" fill="#FFFFFF" text-anchor="middle" alignment-baseline="central">ABC</text>');
  });

  test('Square should render correctly with given properties', () => {
    const square = new Square('XYZ', '#FF00FF', '#00FF00');
    const svg = square.render();

    expect(svg).toContain('<svg width="300" height="200">');
    expect(svg).toContain('<rect width="300" height="200" fill="#00FF00" />');
    expect(svg).toContain('<text x="50%" y="50%" fill="#FF00FF" text-anchor="middle" alignment-baseline="central">XYZ</text>');
  });

  test('Triangle should render correctly with given properties', () => {
    const triangle = new Triangle('123', '#00FFFF', '#FF0000');
    const svg = triangle.render();

    expect(svg).toContain('<svg width="300" height="200">');
    expect(svg).toContain('<polygon points="150,10 290,190 10,190" fill="#FF0000" />');
    expect(svg).toContain('<text x="50%" y="50%" fill="#00FFFF" text-anchor="middle" alignment-baseline="central">123</text>');
  });

  test('Rectangle should render correctly with given properties', () => {
    const rectangle = new Rectangle('456', '#0000FF', '#FFFF00');
    const svg = rectangle.render();

    expect(svg).toContain('<svg width="300" height="200">');
    expect(svg).toContain('<rect width="300" height="200" fill="#FFFF00" />');
    expect(svg).toContain('<text x="50%" y="50%" fill="#0000FF" text-anchor="middle" alignment-baseline="central">456</text>');
  });

});
