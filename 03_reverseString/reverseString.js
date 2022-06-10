const reverseString = function(inputString) {
    let splitString = inputString.split("");
    let reverseArray = splitString.reverse();
    let outputString = reverseArray.join("");
    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
