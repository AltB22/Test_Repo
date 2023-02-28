const buttons = document.getElementsByTagName('button');

const clickHandler = function () {
// TODO: Add a comment describing the purpose of this variable.
//CReate a  count variable which will be part of clickHandler functions lexical env --- my answer was == Set's initial count to 0 for basis to compare increments to
  let count = 0;

  // TODO: Add a comment describing what is happening. 
  // return inner function which creates closure ---- my ansewr was = to increment by 1 every time clicked (per for loop)
  return function () {
  
   // TODO: Add a comment describing how this variable is being scoped. 
    count++;//scope limited to clickHandler() function
   // TODO: Add a comment describing how we are using the 'count' variable.//incrementer
    this.textContent = `Clicks: ${count}`;
  };
};

// TODO: Add a comment describing the purpose of this loop.
//Insteaadding event listener to each button calling click handler function for each
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', clickHandler());
}
