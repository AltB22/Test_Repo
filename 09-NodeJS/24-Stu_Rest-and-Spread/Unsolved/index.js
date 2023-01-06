// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here? Spread Operator
const newSongs = [...songs];

// TODO: What do you expect to be logged in the console? new array called newSongs with the same data as songs array
// console.log(newSongs)

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do? Reduce goes through each element and adds them together
  // console.log(array.reduce((a, b) => a + b, 0));
  return array.reduce((a, b) => a + b, 0);
  
};
// TODO: What do you expect to be logged in the console?
// 6
console.log(addition(1, 2, 3));

// TODO: What is this syntax that is being used as the parameter?
// Rest Operator
const additionSpread = (...array) => {
  // array = [1,2,3]
  return array.reduce((a, b) => a + b, 0);
};

// TODO: What do you expect to be logged in the console?
// 6
// console.log(additionSpread(1, 2, 3));

// TODO: What do you expect to be logged in the console?
// 10
// console.log(additionSpread(1, 2, 3, 4, 100));
