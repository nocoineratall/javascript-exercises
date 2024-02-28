const reverseString = function (toBeReversed) {
  let stringLength = toBeReversed.length;
  let reversed = "";

  for (let i = stringLength - 1; i >= 0; i--) {
    reversed += toBeReversed.at(i);
  }

  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
