// Prompt the user to enter what they are currently doing
const userInput = process.argv[2];
console.log('Current user activity:', userInput);

// If the user does not enter anything, return an error message
if (!userInput) {
  console.error(
    '\nPlease enter your current activity\nUsage: `node index.js <activity>`'
  );
  process.exit();
}

// If the user enters anything other than the word 'coding', set 'studentDistracted' to 'true'
const studentDistracted = userInput !== 'coding';

// TODO: Refactor the following to use promises
// const practiceCoding = (cb, errCb) => {
//   if (studentDistracted) {
//     const errCb = {
//       issue: 'Distracted',
//       message: 'Coding stopped',
//     };
//   } else {
//     cb('We are coding!');
//   }
// };

const practiceCoding =()  => {
 return new Promise((resolve, reject) => {
  if (studentDistracted) {
   const errMessage = newError("coding stopped - the student is distracted")
   reject(errMessage)
   } else {
    resolve('We are coding!')
   }
})
};




const callback = (message) => console.log(message);
const errorCallback = (message) => console.log(message);

// TODO: Refactor to call 'practiceCoding()' and chain a 'then()' to log "We are coding in promises!" in the console
// TODO: Chain a 'catch()' to log "Promise rejected: " and the error
practiceCoding(callback, errorCallback);

practiceCoding()
.then(message => console.log(message))
.catch(err => console.error(err));
