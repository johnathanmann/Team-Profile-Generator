const inquirer = require('inquirer');
const fs = require('fs');

// Question for choosing team member type
const addMembers = [
  {
      type: "list",
      message: "Add team members",
      choices: ["Engineer", "Intern", "No More!"],
      name: "employeeType",
    }
  ];

// Manager questions these are only asked once
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

// Engineer questions can be asked as many times as desired
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

// Intern questions can be asked as many times as desired
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

  // Asks manager questions
function manager(){
    return inquirer.prompt(managerQuestions)
}

// Asks intern or engineer questions
  function getAnswers() {
    return inquirer.prompt(addMembers).then((response) => {
      // Allows the asking of the engineer questions and then the looping of questions if desired
          if (response.employeeType === "Engineer" ) {
            return inquirer.prompt(engineerQuestions).then((answers)=>{
                if (answers.addEngineer) {
                    return getAnswers();
                  }
            })
          }
          // Allows the asking of the intern questions and then the looping of questions if desired 
          if (response.employeeType === "Intern") {
            return inquirer.prompt(internQuestions).then((answers)=>{
                if (answers.addIntern) {
                    return getAnswers();
                  }
            })
          }

          if (response.employeeType === "No More!") {
          }
        })
    };
  // Asks manager questions and then the engineer/intern
  manager().then (()=>{
    getAnswers()
  })
