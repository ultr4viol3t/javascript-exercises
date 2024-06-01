const repeatString = function(text, repeatNum) {
    let finalString = ""
    if (repeatNum < 0) {
        finalString = "ERROR";
    } else {
        for (let i = 0; i < repeatNum; i++) {
            finalString += text;
          }
    }
    return finalString;
};

repeatString("hey", 3)

// Do not edit below this line
module.exports = repeatString;