// Function that actually generates the markdown based of of user input from index.js inquirer
function generateMarkdown(data) {
return `# ${data.title}
## License:

${generateLicense(data.license)}

${generateLicenseDescription(data.license)}


## Table of Contents:

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Testing Procedures](#testing-procedures)
* [Questions](#questions)


## ✏️ Description: <a name="description"></a> 

${data.description}


## ⚙️ Installation: <a name="installation"></a>

${data.installation}


## ✍️ Usage: <a name="usage"></a>

${data.usage}


## 👥 Contributions: <a name="contributions"></a>

${data.contributions}


## 🧪 Testing Procedures: <a name="testing-procedures"></a>

${data.test}


## ❔ Questions: <a name="questions"></a>

If you have questions, feel free to reach me at my email: <br>
${data.email}

My GitHub: <br>
https://github.com/${data.github}
    
`}

// Function that generates the license tag based off what user picks for licensing in inquirer prompt
function generateLicense(data) {
    switch (data) {
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        case 'Apache License 2.0':
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        case 'Mozilla Public License 2.0':
            return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
        case '3-Clause BSD License':
            return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        case '2-Clause BSD License':
            return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
        case 'GNU General Public License v3':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        case 'GNU LGPL v3':
            return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
        case 'Eclipse Public License v2.0':
            return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
        case 'Manual Input':
            return '';
        default:
            return '[![License: Unlicensed](https://img.shields.io/badge/License-Unlicensed-lightgrey.svg)](http://unlicense.org/)';
    }
}

// Function that generates the description based off what user picks for licensing in inquirer prompt
function generateLicenseDescription(data) {
    switch (data) {
        case 'MIT':
            return 'Description: MIT test';
        case 'Apache License 2.0':
            return 'Description: Apache Test';
        case 'Mozilla Public License 2.0':
            return 'Description: Mozilla Test'
        case '3-Clause BSD License':
            return 'Description: 3-Clause BSD License Test'
        case '2-Clause BSD License':
            return 'Description: 2-Clause BSD License Test'
        case 'GNU General Public License v3':
            return 'Description: GNU General Public License v3 Test'
        case 'GNU LGPL v3':
            return 'Description: GNU LGPL v3 Test'
        case 'Eclipse Public License v2.0':
            return 'Description: Eclipse Public License v2.0 Test'
        case 'Manual Input':
            return ''
        default:
            return 'Description: n/a';
    }
}

// Makes file usable by index.js (or other files)
module.exports = generateMarkdown