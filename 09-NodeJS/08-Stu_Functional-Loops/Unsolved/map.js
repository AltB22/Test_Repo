const originalArray = [1, 3, 2, 5, 10];

// doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition. 
const doubledArray = originalArray.map(function(data) {
  // The anonymous function returns each number multiplied by 2. The returned result is added to a new array.
  return data * 2;
  
});

// console.log(doubledArray);
// console.log(originalArray);


// TODO: Describe how map is working in the example below. What will the value of tripledArray be?
//map loops through each number in originalArray, multiplies by 3 and creating new array with 3,6,15,30
const tripledArray = originalArray.map(data => data * 3);
console.log(tripledArray)
// TODO: Describe how map is working in the example below. What will the value of oddOrEven be?
// map takes in originalArray, uses conditinoal statement to check if number is even or odd.
// returns array witih string vals "even" or "odd"
const oddOrEven = originalArray.map(num => {
  if (num % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
  
});
console.log(oddOrEven)