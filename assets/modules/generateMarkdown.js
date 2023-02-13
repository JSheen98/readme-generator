// Function that actually generates the markdown based of of user input from index.js inquirer
function generateMarkdown(data) {
return `# ${data.title}


## ✏️ Description:

${data.description}


## Table of Contents:

* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Testing Procedures](#testing-procedures)
* [Questions](#questions)


## License:

${generateLicense(data.license)}

${generateLicenseDescription(data.license)}


## ⚙️ Installation: <a name="installation"></a>

${data.installation}


## ✍️ Usage: <a name="usage"></a>

${data.usage}


## 👥 Contribution Guidelines: <a name="contributions"></a>

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
            return 'This project is licensed under the MIT License. See LICENSE in the repo for more information.';
        case 'Apache License 2.0':
            return 'This project is licensed under the Apache License 2.0. See LICENSE in the repo for more information.';
        case 'Mozilla Public License 2.0':
            return 'This project is licensed under the Mozilla Public License 2.0. See LICENSE in the repo for more information.'
        case '3-Clause BSD License':
            return 'This project is licensed under the 3-Clause BSD License. See LICENSE in the repo for more information.'
        case '2-Clause BSD License':
            return 'This project is licensed under the 2-Clause BSD License. See LICENSE in the repo for more information.'
        case 'GNU General Public License v3':
            return 'This project is licensed under the GNU General Public License v3. See LICENSE in the repo for more information.'
        case 'GNU LGPL v3':
            return 'This project is licensed under the GNU LGPL v3. See LICENSE in the repo for more information.'
        case 'Eclipse Public License v2.0':
            return 'This project is licensed under the Eclipse Public License v2.0. See LICENSE in the repo for more information.'
        case 'Manual Input':
            return ''
        default:
            return 'This project is not currently licensed.';
    }
}

// Makes file usable by index.js (or other files)
module.exports = generateMarkdown