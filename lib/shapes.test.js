const { Shape, Triangle, Circle, Square } = require("./shapes");

// A testing suite for Shapes is created.
describe("Shapes", () => {
  describe("Triangle.render", () => {
    it("outputs triangle svg code", () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });
});

describe("Shapes", () => {
  describe("Circle.render", () => {
    it("outputs circle svg code", () => {
      const shape = new Circle();
      shape.setColor("green");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="100" r="80" fill="green" />'
      );
    });
  });
});

describe("Shapes", () => {
  describe("Square.render", () => {
    it("outputs square svg code", () => {
      const shape = new Square();
      shape.setColor("#ff0000");
      expect(shape.render()).toEqual(
        '<rect x="100" y="50" width="100" height="100" fill="#ff0000" />'
      );
    });
  });
});
