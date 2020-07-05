const chalk = require(`chalk`);
const inquirer = require(`inquirer`);
const fs = require(`fs`);

const Manager = require(`./lib/manager`);
const Engineer = require(`./lib/engineer`);
const Intern = require(`./lib/intern`);

const managerQuestions = require(`./lib/manager-questions`);
const engineerQuestions = require(`./lib/engineer-questions`);
const internQuestions = require(`./lib/intern-questions`);
const addEmployee = require(`./lib/employeeToAdd-questions`);

const generateHTML = require('./templates/output-template');

const init = async () => {
  const engineersArray = [];
  const internsArray = [];

  // MANAGER INFO
  const managerResponse = await inquirer.prompt(managerQuestions);
 
  const teamManager = new Manager(managerResponse.employeeName, managerResponse.id, managerResponse.email, managerResponse.officeNumber);

  //add manager to the array 



  //EMPLOYEES

  let addToTeam = true;
  while (addToTeam) {
    //add new employee
    let newEmployee = (await inquirer.prompt(addEmployee)).newEmployee;

    //if none return false
    if(newEmployee === 'None'){
      addToTeam = false;
    }

     //if engineer add
     if(newEmployee === 'Engineer'){
       console.log(`add engineer`);
      //create new object and add to array
      const engineerResponse = await inquirer.prompt(engineerQuestions);
      const newEngineer = new Engineer(engineerResponse.employeeName, engineerResponse.id, engineerResponse.email, engineerResponse.github);
      engineersArray.push(newEngineer);

       //if intern add
     }else if (newEmployee === 'Intern'){
       console.log(`add intern`);
       //create new object and add to array
      const internResponse = await inquirer.prompt(internQuestions);
      const newIntern = new Intern(internResponse.employeeName, internResponse.id, internResponse.email, internResponse.school);
      internsArray.push(newIntern);
     }    
  }

  //send the employees data to be put into the html template
  const formattedHTML = generateHTML(teamManager, engineersArray, internsArray);

  fs.writeFile('./output/output.html', formattedHTML, err => {
    if(err){
      return console.log(err);
    }else{
      console.log(`Success!`)
    }
  });
};

init();