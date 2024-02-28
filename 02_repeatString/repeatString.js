const repeatString = function (stringToBeRepeated, times) {
  let output = "";
  if (times >= 0) {
    for (let i = 0; i < times; i++) {
      output += stringToBeRepeated;
    }
    return output;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
