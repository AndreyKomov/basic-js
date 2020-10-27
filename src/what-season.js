

module.exports = function getSeason(date) {

  if (date === undefined) {
    return 'Unable to determine the time of year!';           //date is empty
  }

  if (date === null) {
    throw new Error("Oooops");
  };

  /* if (object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error;
  } */

  let er = new Date(date);
  if (!!er.getDate() === true && date instanceof Date) {
    let month = date.getMonth();
    try {
      date.setDate(40)
    } catch {
      throw new Error("Oopss");
    }
    
    if (month <= 1 || month === 11) {
      return "winter";
    } else if (month >= 2 && month <= 4) {
      return "spring";
    } else if (month >= 5 && month <= 7) {
      return "summer";
    } else if
      (month >= 8 && month <= 10) {
      return "autumn";
    }
  } else {

    throw new Error("Oopss");
  }
};
