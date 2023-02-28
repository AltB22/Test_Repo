// 1) Where is carNoise stored?
//Stored in Global Exec Context
const carNoise = 'Honk';
// 2) Where is goFast stored?
//Stored GEC
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // Assigned a value in phase 1 (creation phase).  Also stored in goFast Execution Context  
  //When function is called, value of argument is assigned to the parameter..
  
  // 5) Where is makeNoise stored?
  // Also stored in goFast Execution Context
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // calls the makeNoise function which passes "Honk" and executes in the GF EC.
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// if user selects "yes" to the confirm prompt then executes goFast function above and assigns the speed to 80
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
