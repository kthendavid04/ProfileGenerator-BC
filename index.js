
const inquirer = require("inquirer");
const fs = require("fs");

//Toster Template
const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <title>Team Roster</title>
</head>
<body>
    <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Team Manager</span>
                    <ul>
                        <li>managers name ${answers.manName}</li>
                        <li>managers employee id${answers.manId}</li>
                        <li>managers e-mail Address${answers.manEmail}</li>
                        <li>managers office number${answers.manNumber}</li>
                    </ul>>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
        <div class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">Engineer</span>
                      <ul>
                          <li>engineers name</li>
                          <li>engineers employee id</li>
                          <li>engineers e-mail Address</li>
                          <li>engineers git hub username</li>
                      </ul>>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
          <div class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">Intern</span>
                      <ul>
                          <li>Interns name</li>
                          <li>Interns employee id</li>
                          <li>Interns e-mail Address</li>
                          <li>Interns school name</li>
                      </ul>>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
      </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>    
</body>
</html>`

//questions

inquirer
    .prompt([
    {
        name: "manName",
        message: "What is the mnager's name?"
    },
    {
        name: "manId",
        message: "What is the mnager's ID?"
    },

    {
        name: "manEmail",
        message: "What is the mnager's email address?"
    },
    {
        name: "manNumber",
        message: "What is the mnager's office number?"
    }
    ])

.then(answers => {
        const HTMLcontent = generateHTML(answers);
    
        fs.writeFile('index.html', HTMLcontent, (err) =>
        err ? console.log(err) : console.log ('Successfully created Team Roster!'));[];
    });