// Creates inquirer, fs, and the internal created generated md file
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./assets/modules/generateMarkdown.js')

// Function that prompts users within the console
function prompt() {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the title of this project?',
                name: 'title',
                // example of validation, if user doesn't input any text, it will put a note saying user must make a selection
                validate: function (input) {
                    if (input === '') {
                        // Logs the mistake, the code around the message makes it display in red
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
                message: "What type of license is this project using? (NOTE: Common licenses are included, others licenses may have to be manually input)",
                name: "license",
                choices: ['MIT', 'Apache License 2.0', 'Mozilla Public License 2.0', '3-Clause BSD License', '2-Clause BSD License', 'GNU General Public License v3',
                'GNU LGPL v3', 'Eclipse Public License v2.0', 'Unlicensed', 'Manual Input']
            }
        ]).then((data) => { 
            // Calls file system writeFile function, and creates a readme (type markdown)  file, and calls generateMarkdown function from generateMarkdown module
            fs.writeFile('READMEsample.md', generateMarkdown(data), (err) => { err ? console.error(err) : console.log('Success!') })

        })
}

// Prompt function call
prompt()





