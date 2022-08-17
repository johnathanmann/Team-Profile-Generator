const inquirer = require('inquirer');
const fs = require('fs');


const addMembers = [
  {
      type: "list",
      message: "Add team members",
      choices: ["Engineer", "Intern"],
      name: "employeeType",
    }
  ];
const managerQuestions = [
    {
        type: 'input',
        message: 'What is the team managers name?',
        name: 'managerName',
      },
      {
          type: 'input',
          message: 'What is the managers ID number?',
          name: 'managerId',
        },
        {
          type: 'input',
          message: 'What is the managers email?',
          name: 'managerEmail',
        },
        {
          type: 'input',
          message: 'What is the managers office number?',
          name: 'managerOffice',
        }
        ];
  const engineerQuestions = [
    {
        type: 'input',
        message: 'What is the engineers name?',
        name: 'engineerName',
      },
      {
          type: 'input',
          message: 'What is the engineers ID number?',
          name: 'engineerId',
        },
        {
          type: 'input',
          message: 'What is the engineers email?',
          name: 'managerEmail',
        },
        {
          type: 'input',
          message: 'What is the engineers GitHub username?',
          name: 'engineerGithub',
        },
        {
            type: 'confirm',
            message: 'Add another team member?',
            name: 'addEngineer',
          },
  ];

  const internQuestions = [
    {
        type: 'input',
        message: 'What is the interns name?',
        name: 'internName',
      },
      {
          type: 'input',
          message: 'What is the interns ID number?',
          name: 'internId',
        },
        {
          type: 'input',
          message: 'What is the interns email?',
          name: 'internEmail',
        },
        {
          type: 'input',
          message: 'What school does the intern go to?',
          name: 'internSchool',
        },
        {
            type: 'confirm',
            message: 'Add another team member?',
            name: 'addIntern',
          },
  ];
function manager(){
    return inquirer.prompt(managerQuestions)
}
  function getAnswers() {
    return inquirer.prompt(addMembers).then(() => {
          if ("Engineer") {
            return inquirer.prompt(engineerQuestions).then((answers)=>{
                if (answers.addEngineer) {
                    return getAnswers();
                  } else {
                    return inquirer.prompt(addMembers)
                  }
            })
          }
          if ("Intern") {
            return inquirer.prompt(internQuestions).then((answers)=>{
                if (answers.addIntern) {
                    return getAnswers();
                  } else {
                    return inquirer.prompt(addMembers)
                  }
            })
          }
        })
    };
  manager().then (()=>{
    getAnswers()
  })
