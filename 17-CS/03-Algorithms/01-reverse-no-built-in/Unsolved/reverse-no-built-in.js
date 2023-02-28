// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method



// const reverse = stringToReverse => {
//     return 'TEST'


// };

const reverse = stringToReverse => {
	// TEST 
	// 4-1 = 3 -> T => 0
	// 3-1 = 2 -> S => 1
	// 2-1 = 1 -> E => 2
	// 1-1 = 0 -> T => 3
	// T + S + E + T
	let result = '';

	for (let index = stringToReverse.length - 1; index >= 0; index--) {
		const letter = stringToReverse[index]; // ex 'T',
		result += letter;
	}
	return result;
};
