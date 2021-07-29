const inquirer = require('inquirer');
const fs = require('fs');


const generateREADME = (answers) =>
  `
 ### Table of Contents 
 [Licensing](#licensing) | [Description](#description) | [Installation](#installation-instructions) | [Usage](#usage) | [Contribution](contribution) | [Tests](test-parameters) | [Contact](#contact)

  ## ${answers.title} 


### Licensing
  This project is licensed under ${answers.license}, ${activeLink}
  
  ${licenseDescription}
  
### Description
  ${answers.description}
### Installation Intstructions
  ${answers.installation}
### Usage 
  ${answers.usage}
### Contribution
  ${answers.contribution}
### Test Parameters
  ${answers.tests}
### Contact
  Connect with me on Github @${answers.github}
  Have any questions about my work? feel free to reach out to me at ${answers.email}. 
 `;
 
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is your project description?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is your usage information?',

    },
    {
      type: 'input',
      name: 'contribution',
      message: 'How should others contribute to your project?',

    },
    {
      type: 'list',
      name: 'license',
      message: 'please select a licensing option:',
      choices: ["MIT", "Apache", "Mozilla", "BSD-2", "BSD-3", "GPL", "LGPL"],
    },
    {
      type: 'input',
      name: 'tests',
      message: 'enter testing information',

    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions for this project?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address.',
    },
  ])
  
  .then((answers) => {
     if(answers.license=="MIT"){
    activeLink = 'https://opensource.org/licenses/MIT';
    licenseDescription = "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the Software), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so";
    } else if(answers.license=="Apache"){
    activeLink = "https://www.apache.org/licenses/LICENSE-2.0";
    licenseDescription = "All packages produced by the ASF are implicitly licensed under the Apache License, Version 2.0, unless otherwise explicitly stated.";
    } else if(answers.license=="Mozilla"){
    activeLink = "https://www.mozilla.org/en-US/MPL/";
    licenseDescription = "Each Contributor hereby grants You a world-wide, royalty-free, non-exclusive license";
    } else if(answers.license=="BSD-2"){
    activeLink = "https://opensource.org/licenses/BSD-2-Clause";
    licenseDescription = "Redistribution and use in source and binary forms, with or without modification are permitted";
    } else if(answers.license=="BSD-3"){
    activeLink = "https://opensource.org/licenses/BSD-3-Clause";
    licenseDescription = "Redistribution and use in source and binary forms, with or without modification are permitted under certain criteria.";
    } if(answers.license=="GPL"){
    activeLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
    licenseDescription = "Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.";
    } if(answers.license=="LGPL"){
    activeLink = "https://www.gnu.org/licenses/lgpl-3.0.en.html";
    licenseDescription = "Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.";
    } 

    const readMeContent = generateREADME(answers);
    fs.writeFile('README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
