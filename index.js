const inquirer = require('inquirer');
const fs = require('fs');
const generateHead = require('./src/createHead');
const generateBottom = require('./src/createBottom');

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
          name: 'engineerEmail',
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
    // After questions have been answered the manager card wll be appended to the html file
    .then((answers) => {
      // Generates head of document adn then title of page
      generateHead();
      // Appends manager info to page
      fs.appendFile("dist/index.html", '<div class="card mx-4 my-4" style="width: 15rem;"><div class="card-body"><h5 class="card-title">'+answers.managerName+'</h5><h6 class="card-subtitle mb-2 text-muted"><i class="fa-solid fa-briefcase"></i> Manager</h6><p class="card-text">ID:'+answers.managerId+' </p><p class="card-text">Email:<a href = "mailto:'+answers.managerEmail+'">'+answers.managerEmail+'</a></p><p class="card-text">Office:'+answers.managerOffice+' </p></div></div>' , (err) => { 
        if (err) { 
          console.log(err); 
        } 
      });
  })
  }

// Asks intern or engineer questions
  function getAnswers() {
    return inquirer.prompt(addMembers).then((response) => {
      // Allows the asking of the engineer questions and then the looping of questions if desired
          if (response.employeeType === "Engineer" ) {
              // After questions have been answered the engineer card wll be appended to the html file as many times as requested by the user
            return inquirer.prompt(engineerQuestions).then((answers) => {
              fs.appendFile("dist/index.html", '<div class="card mx-4 my-4" style="width: 15rem;"><div class="card-body"><h5 class="card-title">'+answers.engineerName+'</h5><h6 class="card-subtitle mb-2 text-muted"><i class="fa-solid fa-computer"></i>Engineer</h6><p class="card-text">ID:'+answers.engineerId+' </p><p class="card-text">Email:<a href = "mailto:'+answers.engineerEmail+'">'+answers.engineerEmail+'</a></p><p class="card-text">Office:'+answers.managerOffice+'<p class="card-text">Github: <a href="https://github.com/'+answers.engineerGithub+'" class="card-link">'+answers.engineerGithub+'</a></p></div></div>' , (err) => { 
                if (err) {console.log(err); } });
                if (answers.addEngineer) {return getAnswers();}})}
          // Allows the asking of the intern questions and then the looping of questions if desired        
            if (response.employeeType === "Intern") {
              // After questions have been answered the intern card wll be appended to the html file as many times as requested by the user
              return inquirer.prompt(internQuestions).then((answers)=>{
              fs.appendFile("dist/index.html", '<div class="card mx-4 my-4" style="width: 15rem;"><div class="card-body"><h5 class="card-title">'+answers.internName+'</h5><h6 class="card-subtitle mb-2 text-muted"><i class="fa-solid fa-graduation-cap"></i>Intern</h6><p class="card-text">ID:'+answers.internId+' </p><p class="card-text">Email:<a href = "mailto:'+answers.internEmail+'">'+answers.internEmail+'</a></p> <p class="card-text">School:'+answers.internSchool+'</p>' , (err) => { 
              if (err) { 
              console.log(err); } });
              if (answers.addIntern) {return getAnswers();}})}
              // After the user is done answering questions the bottom of the document will be appended
              if (response.employeeType === "No More!") {
                generateBottom();
              }})};
  // Asks manager questions and then asks intern engineer questions
  manager().then (()=>{
    getAnswers()
  });



