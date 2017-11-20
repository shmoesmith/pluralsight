let packages = ["sponge: ", "bob: ", "pants: square", "square: sponge", "star: bob" ];
let arrayA = [] //the final list
let arrayB = [] //list of stuff with dependencies
let arrayC = [] //list b parsed so we can test the dependencies against list A

var installer = (packageList) => {
  //add to the final list things we know can immediately go on it
  for (var package of packageList) {
    loopArray = package.split(' ');
    if(loopArray.includes("")) {
      //stuff we know can go in it immediately
      arrayA.push(package)
    } else {
      //stuff that needs to be parsed and tested against known good packages
      arrayB.push(package)
    };
  };

//parse out package so we can look for dependency and check if already installed
  for (var package of arrayB) {
  insideArray = package.split(':');
  arrayC.push([insideArray])
  }

//test parsed out dependency against list and push it if 'ok' and remove it from parsed list
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
