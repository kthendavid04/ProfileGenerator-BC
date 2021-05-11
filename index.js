
const inquirer = require("inquirer");
const fs = require("fs");

//questions

var inquirer_array = [
    {
        name: "name",
        message: "What is the mnager's name?"
    },
    {
        name: "id",
        message: "What is the mnager's ID?"
    },

    {
        name: "email",
        message: "What is the mnager's email address?"
    },
    {
        name: "number",
        message: "What is the mnager's office number?"
    }
];

inquirer
    .prompt(inquirer_array)
    .then(answers => {
        console.log(answers);

    })
    .catch(error => {
        if(errorisTtyError) {
            console.log(error);
            
        }else {
            console.log(error);
        }
    })

function generateHTML(employee){
    let list =document.createElement("UL");

    let name = document.createElement("LI");
    name.setContent = employee.getName();

    let email = document.createElement("LI");
    name.setContent = employee.getEmail();
    let id = document.createElement("LI");
}



//generate html page