
module.exports = function transform(arr) {
  // remove line with error and write your code here
  let arrCopy = arr;
  console.log(arrCopy);
  if (Array.isArray(arrCopy) === true) {
    for (let i = 0; i < arrCopy.length; i++) {
      if (arrCopy[i] === "--double-next") {                                           //for double-next
        i === arrCopy.length - 1 ? arrCopy.splice(i, 1) : arrCopy.splice(i, 1, arrCopy[i + 1]);     //if "control sequences" located in the end, else add next copy

      } else if (arrCopy[i] === "--double-prev") {                                                  //for double-prev
        i === arrCopy.length - 1 ? arrCopy.splice(i, 1) : arrCopy.splice(i, 1, arrCopy[i - 1]);    //if "control sequences" located in the end, else previous copy

      } else if (arrCopy[i] === "--discard-next") {                                   //for discard-next
        i === arrCopy.length - 1 ? arrCopy.splice(i, 1) : arrCopy.splice(i, 2);                 //if "CS" located in the end, else delete current and next

      } else if (arrCopy[i] === "--discard-prev") {                                  //for discard-prev
        i === arrCopy.length - 1 ? arrCopy.splice(i, 1) : arrCopy.splice(i - 1, 2);                 //if "CS" located in the end, else dedllete current and previous
      }
    }
  }

  return arrCopy;
};
