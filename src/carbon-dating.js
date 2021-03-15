const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity !== "string" ||
    isNaN(+sampleActivity) ||
    +sampleActivity <= 0 ||
    +sampleActivity > MODERN_ACTIVITY
  )
    return false;
    
  let decayLevel = Math.log(2) / HALF_LIFE_PERIOD;
  let years = Math.log(MODERN_ACTIVITY / sampleActivity) / decayLevel;
  return Math.ceil(years);
};