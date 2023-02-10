function generateMarkdown(data) {
    return `
# ${data.title}


## Table of Contents:

* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Testing Procedures](#'testing procedures')
* [Questions](#questions)


## ✏️ Description: 

${data.description}


## ⚙️ Installation:

${data.installation}


## ✍️ Usage:

${data.usage}


## 👥 Contributions:

${data.contributions}


## 🧪 Testing Procedures:

${data.test}

## ❔ Questions


If you have questions, feel free to reach me at my email: <br>
${data.email}

My GitHub: <br>
https://github.com/${data.github}
    
`}




module.exports = generateMarkdown