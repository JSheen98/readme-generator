function generateMarkdown(data) {
    return `
# ${data.title}


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




module.exports = generateMarkdown