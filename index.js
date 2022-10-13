const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
let workerRoster = "";


const runManager = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please input manager name',
                name: 'name'
            },
            {
                type: 'input',
                message: 'Please input manager id number',
                name: 'id'
            },
            {
                type: 'input',
                message: 'Please input manager email address',
                name: 'email'
            },
            {
                type: 'input',
                message: 'Please add manager office number',
                name: 'officeNumber'
            }
        ])

        .then((response) => {
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
            workerRoster += htmlManager(manager)
            addEmployee();
        })
}

const runEngineer = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please input engineer name',
                name: 'name'
            },
            {
                type: 'input',
                message: 'Please input engineer id number',
                name: 'id'
            },
            {
                type: 'input',
                message: 'Please input engineer email address',
                name: 'email'
            },
            {
                type: 'input',
                message: 'Please add engineer github profile name',
                name: 'github'
            }
         
        ])
        .then((response) => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github)
            workerRoster += htmlEngineer(engineer)
            addEmployee()
        })
}

const runIntern = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please input intern name',
                name: 'name'
            },
            {
                type: 'input',
                message: 'Please input intern id number',
                name: 'id'
            },
            {
                type: 'input',
                message: 'Please input inter email address',
                name: 'email'
            },
            {
                type: 'input',
                message: 'Please add intern school name',
                name: 'school'
            }
         
        ])
        .then((response) => {
            const intern = new Intern(response.name, response.id, response.email, response.school)
            workerRoster += htmlIntern(intern)
            addEmployee()
        })
}

const addEmployee = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Please choose new employee role',
                name: 'choice',
                choices: ['Engineer', 'Intern', 'Exit']
            }
         
        ])
       .then((response) => {
        if (response.choice === 'Engineer') {
            runEngineer()
        } else if (response.choice === 'Intern') {
            runIntern()
        } else {
            workerRoster += `</body> </html>`
            console.log("exit")
            fs.writeFile('./dist/index.html', workerRoster, (err) =>
            err ? console.error(err) : console.log('Success!') )
        }
       })
}

runManager();

const htmlManager = (manager) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    <title>Employee Team Roster</title>
</head>
<body class="row">
    <div class="card col-6-sm" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${manager.name}</h5>
          <p class="card-text">${manager.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID number: ${manager.id}</li>
          <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
        <div class="card-body">
          <a href="mailto:${manager.email}" class="card-link">Email Contact</a>
        </div>
      </div>
`
    



const htmlEngineer = (engineer) => 
`<div class="card col-6-sm" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${engineer.name}</h5>
          <p class="card-text">${engineer.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID number: ${engineer.id}</li>
        </ul>
        <div class="card-body">
          <a href="mailto:${engineer.email}" class="card-link">Email Contact</a>
          <a href="https://github.com/${engineer.github}" class="card-link" target="_blank">${engineer.github}</a>
        </div>
      </div>`


const htmlIntern = (intern) => 
`<div class="card col-6-sm" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${intern.name}</h5>
        <p class="card-text">${intern.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID number: ${intern.id}</li>
        <li class="list-group-item">School name: ${intern.school}</li>
        </ul>
        <div class="card-body">
        <a href="mailto:${intern.email}" class="card-link">Email Contact</a>
        </div>
    </div>`


