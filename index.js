const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./assets/modules/generateMarkdown.js')

function prompt() {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the title of this project?',
                name: 'title',
                validate: function (input) {
                    if (input === '') {
                        console.log(`\x1b[31mPlease enter a valid project name\x1b[0m`)
                        return 
                    }
                    return true
                }
            },
            {
                type: 'input',
                message: "What is the description for this project?",
                name: "description",
                validate: function (input) {
                    if (input === '') {
                        console.log(`\x1b[31mPlease enter a project valid description\x1b[0m`)
                        return 
                    }
                    return true
                }
            },
            {
                type: 'input',
                message: "What are the installation instructions?",
                name: "installation",
                validate: function (input) {
                    if (input === '') {
                        console.log(`\x1b[31mPlease enter installation instructions (type "n/a" if not applicable)\x1b[0m`)
                        return 
                    }
                    return true
                }
            },
            {
                type: 'input',
                message: "What is the usage info for this project?",
                name: "usage",
                validate: function (input) {
                    if (input === '') {
                        console.log(`\x1b[31mPlease enter usage info (type "n/a" if not applicable)\x1b[0m`)
                        return 
                    }
                    return true
                }
            },
            {
                type: 'input',
                message: "If applicable, what are the contribution requirements?",
                name: "contributions",
                validate: function (input) {
                    if (input === '') {
                        console.log(`\x1b[31mPlease enter contribution info (type "n/a" if not applicable)\x1b[0m`)
                        return 
                    }
                    return true
                }
            },
            {
                type: 'input',
                message: "What are the testing procedures?",
                name: "test",
                validate: function (input) {
                    if (input === '') {
                        console.log(`\x1b[31mPlease enter testing procedures (type "n/a" if not applicable)\x1b[0m`)
                        return 
                    }
                    return true
                }
            },
            {
                type: 'input',
                message: "What is your GitHub username (Warning: this is CASE Sensitive, please enter it correctly)?",
                name: "github",
                validate: function (input) {
                    if (input === '') {
                        console.log(`\x1b[31mPlease enter your GitHub username\x1b[0m`)
                        return 
                    }
                    return true
                }
            },
            {
                type: 'input',
                message: "What is your email address?",
                name: "email",
                validate: function (input) {
                    if (input === '') {
                        console.log(`\x1b[31mPlease enter your email address\x1b[0m`)
                        return 
                    }
                    return true
                }
            },
            {
                type: 'list',
                message: "What type of license is this project using?",
                name: "license",
                choices: ['MIT', 'Apache License 2.0', 'Mozilla Public License 2.0']
            }
        ]).then((data) => {
            console.log(data.license)
            fs.writeFile('README.md', generateMarkdown(data), (err) => { err ? console.error(err) : console.log('Success!') })

        })
}


prompt()





