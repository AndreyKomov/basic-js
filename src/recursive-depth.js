
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    };

    let count = 1;
    for (let i = 0; i < arr.length; i++) {
      count = count + this.calculateDepth(arr[i], count)
    }
    return count;
  }
};