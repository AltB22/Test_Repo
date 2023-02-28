// TODO: Refactor the class to a factory function.
const getInformation = (state)=>({
  information:()=> console.log(state.title, state.description)
  });


const lesson = function(title,description) {
  const state = {
    title,
    description
  };
  //spread operator below
  return {...getInformation(state)};
}

const csForJS = lesson("JS", "advanced CS concepts in JS");
csForJS.information();

// Original
// class Lesson {
//   constructor() {
//     this.title = 'Module 17 - Computer Science';
//     this.description = 'CS for JS';
//   }
//   information() {
//     console.log(this.title, this.description);
//   }
// }

// const csForJS = new lesson("JS", "advanced CS concepts in JS");
// csForJS.information();
