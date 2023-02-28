const grades = [56, 78, 99, 85];


// TODO: Complete the 'findAverage' function below.
function findAverage(accumulator, currentValue, index, array) {
    // let grade = 0;
    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
    // }
    if (index === array.length -1) {
            return (accumulator + currentValue) / array.length;
    }
    return accumulator + currentValue;
}

// TODO: Pass the 'findAverage' into the reduce method.
let gradeAverage = grades.reduce(findAverage, 0);

console.log(gradeAverage);
