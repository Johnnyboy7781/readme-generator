// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const validate = require('./utils/validateInput');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project: (Required)',
        validate: input => validate(input)
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project: (Required)',
        validate: input => validate(input)
    },
    {
        type: 'input',
        name: 'installation-command',
        message: 'What command installs your app: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe how to install your app: (Required)',
        validate: input => validate(input)
    },
    {
        type: 'input',
        name: 'usage-command',
        message: 'What command runs your app: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe how to use your app: (Required)',
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
        type: 'list',
        name: 'license',
        message: 'Which license are you using? (Required)',
        choices: ["No license", "MIT (Most common)", "GPLv2", "GPLv3", "Apache", "BSD 2-clause", "BSD 3-clause", "LGPLv3", "AGPLv3"]
    },
    {
        type: 'input',
        name: 'contributors',
        message: "Please list the contributors: (Required)",
        validate: input => validate(input)
    },
    {
        type: 'input',
        name: 'tests',
        message: "How do you run tests for this code: "
    },
    {
        type: 'input',
        name: 'username',
        message: "What is your github username: (Required)",
        validate: input => validate(input)
    },
    {
        type: 'input',
        name: 'email',
        message: "What is a good email for people to reach you about the project: (Required)",
        validate: input => validate(input, 'email')
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.log(
        '\n================================\n' +
        '   Welcome to readme generator\n' +
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