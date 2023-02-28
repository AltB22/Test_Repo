// TODO: Add a comment describing what the `position` parameter means for this function.

//position of # in fib sequence (index position)
const fibonacci = (position) => {
  // TODO: Add a comment describing the purpose of this conditional statement.//qualifies fib logic - base case b/c 0 and 1 would always be returned.  first 2 numbers in seq are always 0 and 1 and don't compute any further...
  if (position < 2) {
    return position;
  }

  // TODO: Add a comment describing the purpose of this return statement.
  //return the fib number in previous two positions....
  return fibonacci(position - 1) + fibonacci(position - 2);
};//

// TODO: What will this return?
//34 or the number in the 9 index pos in fib sequence.
console.log(fibonacci(9));


//[0, 1, 1, 2, 3, 5]

// -1 + -2 =-3