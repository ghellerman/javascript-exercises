const ftoc = function(tempF) {
  let tempC;
  tempC = (tempF - 32) * (5 / 9);
  let roundedTemp = Math.round(tempC * 10) / 10;
  return roundedTemp
};

const ctof = function(tempC) {
  let tempF;
  tempF = tempC * (9/5) + 32;
  let roundedTemp = Math.round(tempF * 10) / 10;
  return roundedTemp
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
