let packages = ["sponge: ", "bob: ", "square: sponge" ];
let arrayA = []

var installer = (packageList) => {
  for (let package of packageList) {
    loopArray = package.split(' ')
    if(loopArray.includes("")) {
      arrayA.push(package)
    }
  }
}
module.exports.packages = packages;
module.exports.installer = installer;
module.exports.arrayA = arrayA;
