// Helper function to evaluate if a number is within a given range
const inRange = (x, min, max) => (x - min) * (x - max) <= 0;

function Student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;

  // Method that will simulate method overloading in JavaScript
  this.displayGrade = function (grade) {
    const input = grade;
    if (!input) {
      throw new Error('no grade provided');
    }
    let response;
    // Return a letter grade if a number grade was passed
    // Ex. 95 => 'A'

    if (typeof input === 'number') {
      if (inRange(input, 90, 100)){
        response = 'A'
      }
      if (inRange(input, 80, 89)){ //could all be else ifs
        response = 'B'
      }
      if (inRange(input, 70, 79)){
        response = 'C'
      }
      if (inRange(input, 60, 69)){
        response = 'D'
      }
      if (input < 60){ //then this would be an else
        response = 'F'
      }

      // TODO: Add logic here to return a single letter grade
      return response;
    }
    // Return a range if a letter grade was passed
    // Ex. 'A' => '90 - 100'
    if (typeof input === 'string') {
      // TODO: Add logic here to return range as a string
      switch (input){
        case 'A':
          response = '90-100'
          break;
        case 'B':
          response = '80-89'
          break;
        case 'C':
          response = '70-79'
          break;
        case 'D':
          response = '60-69'
          break;
        case 'F':
          response < '60'
          break;
      }       
      return response;
    }
  };
}

const John = new Student('John', 'Appleseed', '30');
console.log('John.displayGrade():', John.displayGrade(95));
console.log('John.displayGrade():', John.displayGrade('B'));
