const inquirer = require('inquirer')
const fs = require('fs')

inquirer
    .prompt([
        {
            type: 'checkbox',
            message: "What sections will your README include?",
            name: '',
        },
        {
            type: 'input',
            message: "",
            name: "",
        },
        {
            type: 'input',
            message: "",
            name: "",
        },
        {
            type: 'input',
            message: "",
            name: "",
        },
        {
            type: 'input',
            message: "",
            name: "",
        },
        {
            type: 'input',
            message: "",
            name: "",
        },
        {
            type: 'input',
            message: "",
            name: "",
        },
        {
            type: 'input',
            message: "",
            name: "",
        },
        {
            type: 'input',
            message: "",
            name: "",
        },
    ])