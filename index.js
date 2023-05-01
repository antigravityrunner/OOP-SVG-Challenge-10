const inquirer = require('inquirer');


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What are 3 characters for you text?',
      name: 'characters',
    },
    {
      type: 'input',
      message: 'What color would you like the text?',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'Please select a shape?',
      name: 'shape',
      choices: ["Square", "Triangle", "Circle"],
    },
    {
        type: 'input',
        message: 'What color would you like the shape?',
        name: 'shapeColor',
      },
  ])
  .then((response) => {
    console.log(response);
  }
  );