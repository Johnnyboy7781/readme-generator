// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const validate = require('./utils/validateInput');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project: ',
        validate: input => validate(input)
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project: ',
        validate: input => validate(input)
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe how to install your app: ',
        validate: input => validate(input)
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe how to use your app: ',
        validate: input => validate(input)
    },
    {
        type: 'confirm',
        name: 'confirmScreenshot',
        message: 'Would you like to include a screenshot?',
        default: false
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Please provide the relative path to your screenshot with its filename: ',
        when: ({ confirmScreenshot }) => {
            if (confirmScreenshot) {
                return true;
            } else {
                return false;
            }
        },
        validate: input => validate(input, 'screenshot')
    },
    {
        type: 'input',
        name: 'weehee',
        message: 'Do you want to tell me a secret?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.log(
        '\n================================\n' +
        '   Welcome to readme generator\n' +
        '      All info is required\n' +
        '================================\n'
    );
    
    return inquirer.prompt(questions);
}

// Function call to initialize app
init();

// Sections
/* Title
   Description
   ToC
   Installation
   Usage
   License
   Contributing
   Tests
   Questions */