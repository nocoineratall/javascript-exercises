const convertToCelsius = function (temperature) {
  let rawTemp = ((temperature - 32) * 5) / 9;
  let decimals = rawTemp - Math.floor(rawTemp);
  let decimalsByTenRounded = Math.round(decimals * 10);
  let roundTemp = Math.floor(rawTemp) + decimalsByTenRounded / 10;
  return roundTemp;
};

const convertToFahrenheit = function (temperature) {
  let rawTemp = (temperature * 9) / 5 + 32;
  let decimals = rawTemp - Math.floor(rawTemp);
  let decimalsByTenRounded = Math.round(decimals * 10);
  let roundTemp = Math.floor(rawTemp) + decimalsByTenRounded / 10;
  return roundTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
