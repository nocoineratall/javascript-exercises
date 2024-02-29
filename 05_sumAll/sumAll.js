const sumAll = function (start, end) {
  //let arrayOfAll = [];

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

    let sum = 0;
    for (let i = start; i <= end; i++) {
      sum += i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
