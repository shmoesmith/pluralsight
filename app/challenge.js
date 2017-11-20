let packages = ["sponge: ", "bob: ", "pants: square", "square: sponge" ];
let arrayA = []
let arrayB = []
let arrayC = []

var installer = (packageList) => {
  for (var package of packageList) {
    loopArray = package.split(' ');
    if(loopArray.includes("")) {
      arrayA.push(package)
    } else {
      arrayB.push(package)
    };
  };
  for (var package of arrayB) {
  insideArray = package.split(':');
  arrayC.push([insideArray])
  }
};

module.exports.packages = packages;
module.exports.installer = installer;
module.exports.arrayA = arrayA;
module.exports.arrayB = arrayB;
module.exports.arrayC = arrayC;
