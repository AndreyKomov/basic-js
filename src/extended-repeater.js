
module.exports = function repeater(str, options) {
  let separ = "";
  let addSepar = "";
  let additionalStr = options.addition;
  let testObj = {
    repeatTimes: 5,
    separator: 'TVSj0MuHtc',
    addition: 'HLxggOx35h',
    additionRepeatTimes: 1,
    additionSeparator: 'po9hwobRyE',
  };

  if (options.addition !== undefined) {
    options.addition = options.addition + "";
  };

  if (options.separator) {                        //separator default is "+"
    separ = options.separator;
  } else {
    separ = "+";
  };

  if (options.additionSeparator) {                        //addition default is "|"
    addSepar = options.additionSeparator;
  } else {
    addSepar = "|";
  };

  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  };

  if (options.addition !== undefined) {
    for (i = 0; i < options.additionRepeatTimes - 1; i++) {
      additionalStr = additionalStr + addSepar + options.addition;
    };
  };

  let resultStr = str;

  if (options.addition) {
    resultStr = str + additionalStr;
  };

  for (let i = 0; i < options.repeatTimes - 1; i++) {
    if (options.addition) {
      resultStr = resultStr + separ + str + additionalStr;
    } else {
      resultStr = resultStr + separ + str;
    };
    
  };
  return resultStr;
};