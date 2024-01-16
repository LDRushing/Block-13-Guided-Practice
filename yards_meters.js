//function convertToMeters(yards){
  //  return * yards 0.9144;
//}
//Above your window prompt, define a function called convertToMeters, which takes yards as an argument. We need this function to do some math for us. The conversion rate from yards to meters is 0.9144. So, let us have our function return the yards (passed in) multiplied by 0.9144.
//let inputYards = prompt('Enter a numbers, we will convert that number from yards to meters.')
//console.log("Input Yards: ", inputYards) //We are now storing a yard amount in memory. Let us put this data to use.
//let inputYards = prompt('enter a number, we will convert that number from yards to meters');
//let convertedMeters = convertToMeters(inputYards); //Now, go back to after your last line of code and invoke this function, passing it our inputYards variable. Store the result of the function call in a variable called convertedMeters. (Remember to use let so it is reassignable.) If you like, you can log this value to view it in the console.
//console.log("Converted Meters: ", convertedMeters);
//function createMessage(yards, meters){
  //  let message = '';
  //  const numYards = yards * 1;
  //} //We now have two variables available to us: inputYards and convertedMeters. Let us use these variables in a new function we will call createMessage. After your last function definition, define a new function called createMessage. It needs to take two arguments, yards and meters, and use if statements to determine what message to return based on the input values. 

 // Inside the function body, create a variable called message using let, as we will be reassigning its value in our if statement. Next create a variable called numYards (using const) and set it equal to the yards passed into the function multiplied by 1. We have multiplying by 1 to make sure it is a number. 
 //function createMessage(yards, meters){
   // let message = '';
   // const numYards = yards * 1;
 // }
  //We can now write our if statement logic! Use the === operator to check the following conditions:
  //If our numYards variable is strictly equal to 1760, reassign the message variable to "That is as long as a mile"
 //If our numYards variable is strictly equal to 100, reassign the message variable to "That is as long as a football field"
 // If our numYards variable is strictly equal to 26, reassign the message variable to "That is as long as a tennis court!"
 // Come up with a few of your own.
 //function createMessage(yards, meters){
   // let message = '';
   // const numYards = yards * 1;
   // if(numYards === 1760) {
   //   message = 'Thats as long as a mile!'
   // } else if(numYards === 100) {
   //   message = 'Thats as long as a football field!';
   // } else if(numYards === 26) {
   //   message = 'Thats as long as a tennis court!';
   // } else if(numYards === 1) {
   //   message = 'Thats as long as a washing machine!';
   // } 
  //}
//Lastly, after your if statements, return a larger message using template literals Links to an external site., declaring how many meters we have converted to yards and the message from our message variable.
//function createMessage(yards, meters){
//    let message = '';
//    const numYards = yards * 1;
//    if(numYards === 1760) {
//      message = 'Thats as long as a mile!'
//    } else if(numYards === 100) {
//      message = 'Thats as long as a football field!';
//    } else if(numYards === 26) {
//      message = 'Thats as long as a tennis court!';
//    } else if(numYards === 1) {
//      message = 'Thats as long as a washing machine!';
//    }
//    return `${yards} yards is ${ meters} meters. ${message}`;
  //}
  //Move back down to your prompts and invoke this function, passing it your convertedMeters and inputYards variables. Store the result of the function call in a variable called output, and console.log it.
//let inputYards = prompt('enter a number, we will convert that number from yards to meters');
//let convertedMeters = convertToMeters(inputYards);
//let output = createMessage(inputYards, convertedMeters);
//console.log(output);
//...

//Above your window prompt, define a function called convertToMeters, which takes yards as an argument. We need this function to do some math for us. The conversion rate from yards to meters is 0.9144. So, let us have our function return the yards (passed in) multiplied by 0.9144.
function convertToMeters(yards){
    return yards * 0.9144;
  }
  
  function createMessage(yards, meters){
    let message = '';
    const numYards = yards * 1;

//Lastly, after your if statements, return a larger message using template literals Links to an external site., declaring how many meters we have converted to yards and the message from our message variable.
//We can now write our if statement logic! Use the === operator to check the following conditions:
//If our numYards variable is strictly equal to 1760, reassign the message variable to "That is as long as a mile"
//If our numYards variable is strictly equal to 100, reassign the message variable to "That is as long as a football field"
// If our numYards variable is strictly equal to 26, reassign the message variable to "That is as long as a tennis court!"
//=== << Strict Equality Operator. 
    if(numYards === 1760) {
      message = 'Thats as long as a mile!'
    } else if(numYards === 100) {
      message = 'Thats as long as a football field!';
    } else if(numYards === 26) {
      message = 'Thats as long as a tennis court!';
    } else if(numYards === 1) {
      message = 'Thats as long as a washing machine!';
    }
  
    return `${yards} yards is ${ meters} meters. ${message}`;
  }
  //The '$' signs are communicative.
  // The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.
  function rand(limit){
    return Math.round(Math.random()*limit);
  }
  //Move back down to your prompts and invoke this function, passing it your convertedMeters and inputYards variables. Store the result of the function call in a variable called output, and console.log it.
  let inputYards = prompt('Enter a number. We will convert that number from yards to meters');
  let convertedMeters = convertToMeters(inputYards);
  let output = createMessage(inputYards, convertedMeters);
  console.log(output);
  
  //Move back down to your prompts and invoke this function, passing it your convertedMeters and inputYards variables. Store the result of the function call in a variable called output, and console.log it.
  inputYards = prompt('Lets try again! enter a number, we will convert that number from yards to meters');
  convertedMeters = convertToMeters(inputYards);
  output = createMessage(inputYards, convertedMeters);
  console.log(output);
  
  //Next, try and use the rand() function to replace the role of the window prompt() in my JavaScript file. 
  //In general, rand() % n gives you a random number between 0 and n - 1.The 100 provides a limit. 
  let randomYards = rand(100); 
  convertedMeters = convertToMeters(randomYards);
  output = createMessage(randomYards, convertedMeters);
  console.log(output);
