const inquirer = require("inquirer");
const fs = require("fs");

const { Shape, Triangle, Circle, Square } = require("./lib/shapes");

inquirer
  .prompt([
    {
      type: "input",
      message: "What are 3 characters for you text?",
      name: "text",
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

    let svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    svg = svg + shape.render();
    svg =
      svg +
      `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>`;
    svg = svg + "</svg>";
    fs.writeFileSync("logo.svg", svg);
  });
