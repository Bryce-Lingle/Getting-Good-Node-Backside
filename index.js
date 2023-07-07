//Here aremy two modules needed forthis assignment
//It doesn't break when running it so everythingis setup correctly to move forward
const inquirer = require('inquirer');
const fs = require('fs');

// Prompting user for information 
inquirer.prompt([
    {
       message:'Enter the title of your project',
       name:'title',
       type:'input',
    },
    {
        message:'Enter the description of your project',
        name:'description',
        type:'input',
     },
     {
        message:'Enter installation instructions: ',
        name:'installation',
        type:'input',
     },
     {
        message:'Enter usage information',
        name:'usage',
        type:'input',
     },
     {
        message:'Enter contributing guidlines',
        name:'contributing',
        type:'input',
     },
     {
        message:'Enter tests instrictions',
        name:'tests',
        type:'input',
     },
     {
        message:'Choose a license for your application:',
        name:'license',
        type:'list',
        choices:['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
     },
     {
        message:'Enter your GitHub username:',
        name:'github',
        type:'input',
     },
     {
        message:'Enter your email address',
        name:'email',
        type:'input',
     },
])
.then((responses) => {
    console.log(responses);

    const readmeContent =
`# ${responses.title}

## Table of Contents
        - [Description](#description)
        - [Installation](#installation)
        - [Usage](#usage)
        - [License](#license)
        - [Contributing](#contributing)
        - [Tests](#tests)
        - [Questions](#questions)

 ## Description
    ${responses.description}

## Installation
    ${responses.installation}

## Usage
${responses.usage}

## License
This application is covered under the ${responses.license} license. 

## Contributing
${responses.contribution}

## Tests
${responses.tests}

## Questions
For additional questions, you can reach me through GitHub: [${responses.github}](https://github.com/${responses.github})
Contact me by email: ${responses.email}`

fs.writeFile('README.md', readmeContent, (err) => {
    if (err) throw err;
    console.log('README.md file has been generated!')
    });
})