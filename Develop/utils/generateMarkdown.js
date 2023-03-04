// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
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

module.exports = generateMarkdown;
