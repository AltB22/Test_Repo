// TODO: Import `maths.js`

const goodMath = require('./maths.js'); 



// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`

const operation = process.argv[2];
const numOne = +process.argv[3];//plus sign (+ changes a string into a number)
const numTwo = +process.argv[4]//and can be added at any point where the const is used (ie below)

// console.log(operation);
// console.log(numOne);
// console.log(numTwo);
// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`

switch(operation) {
    case 'sum':
    console.log(goodMath.sum(numOne,numTwo)) //if no + on 10 & 11 then (goodMath.sum(number(numOne,numTwo)))
    case 'difference':
        console.log(goodMath.difference(numOne,numTwo)) //if no + on 10 & 11 then (goodMath.sum(number(numOne,numTwo)))
        case 'product':
            console.log(goodMath.product(numOne,numTwo)) //if no + on 10 & 11 then (goodMath.sum(number(numOne,numTwo)))
            case 'quotient':
                console.log(goodMath.quotient(numOne,numTwo)) //if no + on 10 & 11 then (goodMath.sum(number(numOne,numTwo)))
            default:
                console.log('check your math');
}
