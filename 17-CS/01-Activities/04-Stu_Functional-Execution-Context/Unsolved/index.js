// returns the average value of an array of numbers

let total = 0;

function avg(array) {
  function sum() {
    
    for(let i = 0; i < array.length; i++) {
      total += array[i];
    }
   return total;
  }
  sum();
  return total/array.length;
 
  
 
}

module.exports = avg;
