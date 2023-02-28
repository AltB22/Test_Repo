const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];

// TODO: Complete the linearSearch function below.//our group's try
// const linearSearch = (array, element) => {
//     arr = array;
//     if(!element){
//         return -1;
//     }   else {
//     return element
//       };
//     }

const linearSearch = (array, element) => {//Marcelo answer
      for(let i = 0; i<array.length; i++){
        if(element===array[i]){
            return i;
        }
      };
      return -1;
        }

module.exports = linearSearch




// * As a developer, I want to be able to find the position of a value in a set of data.

// ## Acceptance Criteria

// * It's done when the search algorithm function can accept an input array and value to find.

// * It's done when the search algorithm returns the position of the value we are searching for.

// * It's done when the search algorithm returns `-1` to indicate that the value is not in the data set.

// ---

// ## 💡 Hints

// How can we run the unit tests to test our algorithm?