
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

    })
    .catch(error => {
        if(errorisTtyError) {
            
        }else {

        }
    })





//generate html page