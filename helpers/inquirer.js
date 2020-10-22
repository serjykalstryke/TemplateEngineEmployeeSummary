const inquirer = require("inquirer");

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "nameManager",
            message: "Enter Manager Name: "
        },
        {
            type: "input",
            name: "idManager",
            message: "Enter Manager ID: "
        },
        {
            type: "input",
            name: "emailManager",
            message: "Enter Manager Email: "
        },
        {
            type: "input",
            name: "officeManager",
            message: "Enter Manager Office Number: "
        },
        {
            type: "input",
            name: "nameEngineer1",
            message: "Enter name of engineer number 1: "
        },
        {
            type: "input",
            name: "idEngineer1",
            message: "Enter ID of engineer number 1: "
        },
        {
            type: "input",
            name: "emailEngineer1",
            message: "Enter email of engineer number 1: "
        },
        {
            type: "input",
            name: "githubEngineer1",
            message: "Enter GitHub Username of engineer number 1: "
        },
        {
            type: "input",
            name: "nameEngineer2",
            message: "Enter name of engineer number 2: "
        },
        {
            type: "input",
            name: "idEngineer2",
            message: "Enter ID of engineer number 2: "
        },
        {
            type: "input",
            name: "emailEngineer2",
            message: "Enter email of engineer number 2: "
        },
        {
            type: "input",
            name: "githubEngineer2",
            message: "Enter GitHub Username of engineer number 2: "
        },
  
        {
            type: "input",
            name: "nameEngineer3",
            message: "Enter name of engineer number 3: "
        },
        {
            type: "input",
            name: "idEngineer3",
            message: "Enter ID of engineer number 3: "
        },
        {
            type: "input",
            name: "emailEngineer3",
            message: "Enter email of engineer number 3: "
        },
        {
            type: "input",
            name: "githubEngineer3",
            message: "Enter GitHub Username of engineer number 3: "
        },
        
  
        {
            type: "input",
            name: "nameIntern1",
            message: "Enter name of Intern number 1: "
        },
        {
            type: "input",
            name: "idIntern1",
            message: "Enter ID of Intern number 1: "
        },
        {
            type: "input",
            name: "emailIntern1",
            message: "Enter email of Intern number 1:"
        },
        {
            type: "input",
            name: "linkedinIntern1",
            message: "Enter linkedin account of intern number 1: "
        },

        {
            type: "input",
            name: "nameIntern2",
            message: "Enter name of Intern number 2: "
        },
        {
            type: "input",
            name: "idIntern2",
            message: "Enter ID of Intern number 2: "
        },
        {
            type: "input",
            name: "emailIntern2",
            message: "Enter email of Intern number 2:"
        },
        {
            type: "input",
            name: "linkedinIntern2",
            message: "Enter linkedin account of intern number 2: "
        },
       
    ]);
  }

  module.exports = promptUser