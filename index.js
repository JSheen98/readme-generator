const inquirer = require('./assets/modules/node_modules/inquirer')
const fs = require('fs')

function prompts() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the description for you project?",
                name: "description",
            },
            {
                type: 'input',
                message: "What are the installation instructions?",
                name: "installation",
            },
            {
                type: 'input',
                message: "What is the usage info for the project?",
                name: "usage",
            },
            {
                type: 'input',
                message: "Are you allowing contributions to the project, and if so, what are the requirements?",
                name: "contributions",
            },
            {
                type: 'input',
                message: "What are the testing procedures?",
                name: "test",
            },
            {
                type: 'input',
                message: "What is your GitHub username (Warning: this is CASE Sensitive)?",
                name: "questions",
            },
            {
                type: 'list',
                message: "What type of license is this project using?",
                name: "license",
                choices: ['MIT', 'Apache License 2.0', 'Mozilla Public License 2.0']
            },
        ]).then((promptData) => {
            return promptData
        })
}


prompts()

