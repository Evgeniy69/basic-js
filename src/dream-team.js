const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let encryption = [];
  for (let member of members) {
    if (typeof member === "string") {
      encryption.push(member.trim().charAt(0).toUpperCase());
    }
  }
 encryption = encryption.sort().join('');
  return encryption;
};