let packages = ["sponge: ", "bob: ", "pants: square", "square: sponge" ];
let arrayA = []
let arrayB = []

var installer = (packageList) => {
  for (let package of packageList) {
    loopArray = package.split(' ')
    if(loopArray.includes("")) {
      arrayA.push(package)
    } else {
      arrayB.push(package)
    }
  }
}

module.exports.packages = packages;
module.exports.installer = installer;
module.exports.arrayA = arrayA;
module.exports.arrayB = arrayB;
