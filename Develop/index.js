// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [    {
    type: 'input',
    name: 'title',
    message: `What is your project's title?`,
    validate: (value) => { if (value) { return true } else { return `Please fill out.` } },
},
{
    type: 'input',
    name: 'description',
    message: 'Write the description of the project here.',
    validate: (value) => { if (value) { return true } else { return `Please fill out.` } },
},
{
    type: 'input',
    name: 'installs',
    message: 'Write the installation commands for the terminal prompt here.',
    validate: (value) => { if (value) { return true } else { return `Please fill out.` } },
},
{
    type: 'input',
    name: `usage`,
    message: `List usage information here.`,
    validate: (value) => { if (value) { return true } else { return `Please fill out.` } },
},
{
    type: 'input',
    name: 'contributions',
    message: 'Any way to for others to contribute to the project?',
    validate: (value) => { if (value) { return true } else { return `Please fill out.` } },
}, 
{
    type: 'input',
    name: 'tests',
    message: 'Write the terminal prompt to test the project.',
    validate: (value) => { if (value) { return true } else { return `Please fill out.` } },
},
{
    type: 'list',
    name: 'license',
    message: `Pick which license you're using`,
    choices: ['MIT', 'APACHE', 'GPLv2', 'None'],
    validate: (value) => { if (value) { return true } else { return `Please fill out.` } },
},
{
    type: 'input',
    name: `gitUser`,
    message: `What is your Github username?`,
    validate: (value) => { if (value) { return true } else { return `Please fill out.` } },
},
{
    type: 'input',
    name: 'email',
    message: 'What email is the best way to contact you for the project?',
    validate: (value) => { if (value) { return true } else { return `Please fill out.` } },
}, 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Writing README...'),
    );
}

// TODO: Create a function to initialize app
function init() {
    fileName = "README.md",
    inquirer
    .prompt(questions)
    .then((answers) => {
        writeToFile(fileName, generateMarkdown({ ...answers }))
    });
}

// Function call to initialize app
init();
