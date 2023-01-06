const inquirer = require('inquirer');
const fs = require('fs');
// console.log(answers)
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'username',
    },
    {
      type: 'checkbox',
      message: 'Gender?',
      choices: ["male", "female", "prefer not to answer"],
      name: 'gender',
    },
    {
      type: 'input',
      message: 'What city are you located in?',
      name: 'location',
    },
  ])
  .then((answers) => {
  
  const {name , gender, location} = answers
  console.log(name)
  const userInput = [].push(name, gender[0], location)

  for (const userAnswers of userInput)
 {
    fs.appendFile('userInput.html', `<p>${userAnswers}</p>`)
 }    // fs.writeFile('userInput.html', answers, (err)  => 
    // err ? console.log('Success!') : console.log('Something went wrong'))
  });
