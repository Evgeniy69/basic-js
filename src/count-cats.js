const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let flatarray = matrix.flat();
  let count = 0;
  for (let i = 0; i < flatarray.length; i++) {
    if(flatarray[i]=="^^") {
      count+=1;
    }
};
return count; 
}
