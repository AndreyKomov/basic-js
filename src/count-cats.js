

module.exports = function countCats(matrix) {
  
  // remove line with error and write your code here

  let matrixStr = [];
  let result = 0;
  for (i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === "^^") {
        matrixStr.push(1);
      }
    }
  };

  for (let i = 0; i < matrixStr.length; i++) {
    result = result + matrixStr[i];
  }
  return result;
};
