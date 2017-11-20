let packages = ["sponge: ", "bob: ", "pants: square", "square: sponge", "star: bob" ];
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

  for (var package of arrayC) {
     var packageIndex = arrayC.indexOf(package)
     var dependency = (package[0][1]).trim()
     dependency = `${dependency}: `
     if(arrayA.includes(dependency)) {
      let string = package[0].join(':')
      arrayA.push(string)
      arrayC.splice(packageIndex, 1)
      }
  }
};

module.exports.packages = packages;
module.exports.installer = installer;
module.exports.arrayA = arrayA;
module.exports.arrayB = arrayB;
module.exports.arrayC = arrayC;
