const CustomError = require("../extensions/custom-error");

const SECONDS_IN_HOUR = 3600;

const turn = (disks) => 2**disks - 1;

module.exports = function calculateHanoi(disks, speed) {
  let turns = turn(disks);
  return {
    turns: turns,
    seconds: Math.floor(SECONDS_IN_HOUR / speed * turns)
  }
}