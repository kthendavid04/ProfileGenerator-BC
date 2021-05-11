
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
    <div class="col s6 m3">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Employee</span>
                    <ul>
                        <li>Name: ${answers.empName}</li>
                        <li>Employee ID: ${answers.empId}</li>
                        <li><a href="mailto:"><i class="material-icons">mail</i></a>${answers.empEmail}</li>
                    </ul>
            </div>
          </div>
        </div>
        <div class="col s6 m3">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Team Manager</span>
                    <ul>
                        <li>Manager: ${answers.manName}</li>
                        <li>Employee ID: ${answers.manId}</li>
                        <li><a href="mailto:"><i class="material-icons">mail</i></a>${answers.manEmail}</li>
                        <li>Office Number: ${answers.manNumber}</li>
                    </ul>
            </div>
          </div>
        </div>
        <div class="col s6 m3">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">Engineer</span>
                      <ul>
                          <li>Engineer: ${answers.engName}</li>
                          <li>Employee ID: ${answers.engId}</li>
                          <li><a href="mailto:"><i class="material-icons">mail</i></a>${answers.engEmail}</li>
                          <li><a href="https://github.com/"><i class="fa fa-github" aria-hidden="true"></i>GitHub</a>${answers.engGitHub}</li>
                      </ul>
              </div>
            </div>
          </div>
          <div class="col s6 m3">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">Intern</span>
                      <ul>
                          <li>Intern: ${answers.intName}</li>
                          <li>Employee ID: ${answers.intId}</li>
                            <li><a href="mailto:"><i class="material-icons">mail</i></a>${answers.intEmail}</li>
                          <li>School name: ${answers.intSchool}</li>
                      </ul>
              </div>
            </div>
          </div>
      </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script src="https://kit.fontawesome.com/0bddabc40e.js" crossorigin="anonymous"></script>    
</body>
</html>`

//questions
inquirer
    .prompt([
    {
        name: "empName",
        message: "What is the employee name?"
    },
    {
        name: "empId",
        message: "What is the employee ID?"
    },

    {
        name: "empEmail",
        message: "What is the employee email address?"
    },
    {
        name: "manName",
        message: "What is the manager's name?"
    },
    {
        name: "manId",
        message: "What is the manager's ID?"
    },

    {
        name: "manEmail",
        message: "What is the manager's email address?"
    },
    {
        name: "manNumber",
        message: "What is the manager's office number?"
    },
    {
        name: "engName",
        message: "What is the engineers name?"
    },
    {
        name: "engId",
        message: "What is the engineers ID?"
    },

    {
        name: "engEmail",
        message: "What is the engineers email address?"
    },
    {
        name: "engGitHub",
        message: "What is the engineers GitHub username?"
    },
    {
        name: "intName",
        message: "What is the intern's name?"
    },
    {
        name: "intId",
        message: "What is the intern's employee ID?"
    },

    {
        name: "intEmail",
        message: "What is the intern's email address?"
    },
    {
        name: "intSchool",
        message: "What is the intern's school name?"
    }
    ])

.then(answers => {
        const HTMLcontent = generateHTML(answers);
    
        fs.writeFile('index.html', HTMLcontent, (err) =>
        err ? console.log(err) : console.log ('Successfully created Team Roster!'));[];
    });