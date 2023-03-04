const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
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
]

function generateReadMe(data) {
return `# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [contributing](#contributing)
- [tests](#tests)
- [questions](#questions)

## Installation

${data.installs}

## Usage

${data.usage}

## License

${data.license}

## Contributing

${data.contributions}

## Tests

${data.tests}

# Questions

Got questions about the repo? Feel free to add an issue on my Github page and check out my other works here: 
[${data.gitUser}](https://github.com/${data.gitUser}/) 
or you can contact me at ${data.email}
`;
}

function writeToFile(fileName, answers) {
    //fs.writeToFile(README.md, generateReadMe(questions), (err) =>
    let inputs = generateReadMe(answers)
    fs.writeFile(fileName, inputs, (err) =>
    err ? console.log(err) : console.log('Success!'),
    );
}
// TODO: Create a function to initialize app
function init() {
    
    fileName = "README.md",
    inquirer
    .prompt(questions)
    .then((answers) => {
//        console.log(answers, "answers"),
        writeToFile(fileName, answers)
    })
    // TODO: Create a function to write README file
}
// Function call to initialize app
init();