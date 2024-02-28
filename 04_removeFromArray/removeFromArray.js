//arguments[] is an array-like object tha contains the arguments ->
// -> passed to the function

const removeFromArray = function (inputArray) {
  /*pseudocode
    instead of removing elements from the given array, the function checks
    whether the arguments to be removed are present in the array and builds
    a new array (outputArray) without them.
    1 - the first loop scans the inputArray elements
    2 - each element is compared to the arguments to be removed from inputArray
    3 - if a match is found, move to the next inputArray element (hence, we don't want it)
        if no match, a counter keeps track of it (MAYBE we want to keep it)
    4 - if no matches at all, then the inputArray element can be pushed to the outputArray
  */

  let outputArray = [];
  const startingLength = inputArray.length;
  console.log(`startingLength = ${startingLength}`);
  const argumentsLength = arguments.length;
  console.log(`argumentsLength = ${argumentsLength}`);
  let counter = 0;

  for (let i = 0; i < startingLength; i++) {
    console.log(`array element = ${inputArray[i]}\nat index i = ${i}`);
    counter = 0;

    for (let j = 1; j < argumentsLength; j++) {
      console.log(`argument = ${arguments[j]}\nat index j = ${j}`);

      if (inputArray[i] === arguments[j]) {
        // match found: don't keep item i
        break;
      } else {
        // no match
        counter++;
      }
    }

    //if no match is found against all the arguments (items to be removed)
    //then we want to keep the i element
    if (counter == argumentsLength - 1) {
      outputArray.push(inputArray[i]);
      console.log(`Item pushed. outputArray = ${outputArray}`);
    }
  }

  return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
