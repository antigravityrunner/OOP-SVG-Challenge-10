const inquirer = require("inquirer");
const fs = require("fs");

const { Shape, Triangle, Circle, Square } = require("./lib/shapes");

inquirer
  .prompt([
    {
      type: "input",
      message: "What are 3 characters for you text?",
      name: "characters",
    },
    {
      type: "input",
      message: "What color would you like the text?",
      name: "textColor",
    },
    {
      type: "list",
      message: "Please select a shape?",
      name: "shape",
      choices: ["Square", "Triangle", "Circle"],
    },
    {
      type: "input",
      message: "What color would you like the shape?",
      name: "shapeColor",
    },
  ])
  .then((response) => {
    let shape;
    if (response.shape == "Square") {
      shape = new Square();
    } else if (response.shape == "Triangle") {
      shape = new Triangle();
    } else if (response.shape == "Circle") {
      shape = new Circle();
    }
    shape.setColor(response.shapeColor);

    let svg = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> \n
    <svg width="300" height="100">`;
    svg = svg + shape.render();
    svg = svg + "</svg>";
    fs.writeFileSync("logo.svg", svg);
  });
