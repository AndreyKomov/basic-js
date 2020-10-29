
module.exports = class DepthCalculator {

calculateDepth(arr) {

  let maxDeep = 0;
let count = 1;
    if (!Array.isArray(arr)) {
      return 0;
    };

    if (arr.length === 0) {
      return 1;
    }


    for (let i = 0; i < arr.length; ++i) {

      if (Array.isArray(arr[i])) {
        count = 1 + this.calculateDepth(arr[i]);
      }
    }

    if (count > maxDeep) {
      maxDeep = count;
      count = 1;
    }

    return maxDeep;
  };
}