const sumAll = function (start, end) {
  let arrayOfAll = [];
  let sum = 0;

  if (start < 0 || end < 0) {
    return "ERROR";
  } else if (typeof start != "number" || typeof end != "number") {
    return "ERROR";
  } else {
    if (start > end) {
      // reverses start with end so that end > start
      let hold = end;
      end = start;
      start = hold;
    }

    //builds an array made of integers from start to end
    for (let i = start; i <= end; i++) {
      arrayOfAll.push(i);
    }

    for (let j = 0; j < arrayOfAll.length; j++) {
      sum += arrayOfAll[j];
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
