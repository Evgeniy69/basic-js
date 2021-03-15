const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error('Error')
};
let newarray = arr.slice();
for (let i = 0; i < newarray.length; i++) {
  if (newarray[i]=="--discard-next") {
    newarray= newarray.splice([i], 2);
  }

  else if (newarray[i]=="--discard-prev") {
    newarray= newarray.splice([i-1], 2)
  }

  else if(newarray[i]=="--double-next") {
    newarray[i]=newarray[i+1]
    return newarray;
  }

  else if(newarray[i]=="--double-prev") {
    newarray[i]=newarray[i-1]
    return newarray;
  }
  else return newarray;

}
}