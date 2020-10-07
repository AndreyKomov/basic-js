
module.exports = function repeater(str, options) {
  let separ = "";
      let addSepar = "";
      let additionalStr = options.addition;



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

      if (options.additional !== undefined) {
        for (i = 0; i < options.additionRepeatTimes - 1; i++) {
          additionalStr = additionalStr + addSepar + options.addition;
        };
      };

      let resultStr = str;

      if (options.addition) {
        resultStr = str + additionalStr;
      };
      debugger
      for (let i = 0; i < options.repeatTimes - 1; i++) {
        if (options.additional) {
          resultStr = resultStr + separ + str + additionalStr;
        } else if (options.separator) {
          resultStr = resultStr + separ + str;
        } else if (!options.separator) {
          resultStr = resultStr + separ + str;
        };
      };
      return resultStr;
};