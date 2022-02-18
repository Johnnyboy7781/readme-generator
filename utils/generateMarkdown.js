function renderLicenseBadge(license) {
  if (license === "No license") {
    return "";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "GPLv2") {
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
  } else if (license === "GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "BSD 2-clause") {
    return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  } else if (license === "BSD 3-clause") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "LGPLv3") {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (license === "AGPLv3") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  }
}

function renderLicenseLink(license) {
  if (license === "No license") {
    return "";
  } else if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "GPLv2") {
    return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
  } else if (license === "GPLv3") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else if (license === "Apache") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "BSD 2-clause") {
    return "https://opensource.org/licenses/BSD-2-Clause";
  } else if (license === "BSD 3-clause") {
    return "https://opensource.org/licenses/BSD-3-Clause";
  } else if (license === "LGPLv3") {
    return "https://www.gnu.org/licenses/lgpl-3.0";
  } else if (license === "AGPLv3") {
    return "https://www.gnu.org/licenses/agpl-3.0";
  }
}

function renderLicenseSection(license) {
  if (license === "No license") return "";
  return `
  ## License
  ${renderLicenseBadge(license)}  
  This repo is covered under the ${license} license.  
  Please refer to the following link for more information: ${renderLicenseLink(license)}
  `;
}

const renderTableOfContents = licesne => {
  if (licesne === "No license") {
    return `## Table of Contents
   - [Installation](#installation)
   - [Usage](#usage)
   - [Contributing](#contributing)
   - [Tests](#tests)
   - [Questions](#questions)
    `
  } else {
    return `## Table of Contents
   - [Installation](#installation)
   - [Usage](#usage)
   - [Contributing](#contributing)
   - [Tests](#tests)
   - [Questions](#questions)
   - [License](#license)
    `;
  }
}

const renderCommand = cmd => {
 if (!cmd) return ``;

 return `\`\`\`${cmd}\`\`\``;
}

const renderPlaceholderImg = confirm => {
  if (confirm) {
    return `
    <!--- Don't forget to change the path to your actual image path! --->
    ![Screenshot](./placeholder.png)
    `;
  } else {
    return ``;
  }
}

function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ${renderTableOfContents(data.license)}

  ## Installation
  ${data.installation}  
  ${renderCommand(data.installationCommand)}

  ## Usage 
  ${data.usage}  
  ${renderCommand(data.usageCommand)}
  ${renderPlaceholderImg(data.confirmScreenshot)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Please refer all questions about this repo to github user [@${data.username}](https://github.com/${data.username})  
  A good email to reach this person at is: ${data.email}

  ${renderLicenseSection(data.license)}
  `;
}

module.exports = generateMarkdown;
