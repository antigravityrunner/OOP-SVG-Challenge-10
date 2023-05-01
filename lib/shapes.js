function Shape() {
  this.setColor = function (color) {
    this.color = color;
  };
}

function Triangle() {
  Shape.call(this);
  this.render = function () {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  };
}

function Circle() {
  Shape.call(this);
  this.render = function () {
    return `<circle cx="150" cy="100" r="75" fill="${this.color}" />`;
  };
}

function Square() {
  Shape.call(this);
  this.render = function () {
    return `<rect width="300" height="100" fill="${this.color}" />`;
  };
}

module.exports = { Shape, Triangle, Circle, Square };
