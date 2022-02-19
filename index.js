const fs = require('fs');
const inquirer = require('inquirer');
const validate = require('./utils/validateInput');
const generateMarkdown = require('./utils/generateMarkdown');

/* MOCK DATA FOR TESTING */
// const mockData = {
//     title: 'Run Buddy',
//     description: 'A website where you can find people to run with.',
//     installationCommand: '',
//     installation: 'Run the npm command',
//     usageCommand: 'node index',
//     usage: 'Use the node command to start the app',
//     confirmScreenshot: true,
//     license: 'MIT',
//     contributing: 'Fork the repo and make a PR',
//     tests: 'Run the node command and look at it',
//     username: 'johnnyboy7781',
//     email: 'john@yahoo.com'
//   }

const questions = [
    {
        type: 'input',
        name: 'title',
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
        name: 'installationCommand',
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
        name: 'usageCommand',
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
        default: false,
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license are you using? (Required)',
        choices: ["No license", "MIT", "GPLv2", "GPLv3", "Apache", "BSD 2-clause", "BSD 3-clause", "LGPLv3", "AGPLv3"]
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Please describe how someone can contribute to this repo: (Required)",
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

function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}`, generateMarkdown(data), err => {
        if (err) console.log(err);
    })
}

function init() {
    console.log(
        '\n================================\n' +
        '   Welcome to readme generator\n' +
        '================================\n'
    );
    
    return inquirer.prompt(questions);
}

init()
    .then(answers => writeToFile('README.md', answers))
    .then(() => console.log(
        '\n================================\n' +
        '        README generated!\n' +
        '    Check the dist directory\n' +
        '       Have a great day! ;)\n' +
        '================================\n'
    ));