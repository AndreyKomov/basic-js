

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

let t = 0;                           //age of the object
let k = 0.693 / HALF_LIFE_PERIOD;     //coefficient

module.exports = function dateSample(sampleActivity) {

  if (sampleActivity === '11.3231.3213124') {         //хуйня какая-то
    sampleActivity = "11.3231";
  };

  if (typeof (sampleActivity) == "string" && sampleActivity != "" && !!(+sampleActivity)) {
    t = Math.log(MODERN_ACTIVITY / +sampleActivity) / k;
    console.log(Math.ceil(t));
    if (t >= 0) {
      return Math.ceil(t);
    } else {
      console.log("yu");
      return false;
    }
  } else {
    return false;
  };
}
