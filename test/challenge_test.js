var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var challenge = require('../app/challenge.js');
var installer = challenge.installer;
var packages = challenge.packages;
let arrayA = challenge.arrayA;
let arrayB = challenge.arrayB;
let arrayC = challenge.arrayC

describe('Challenge', () => {
  it('makes sure the function exists', () => {
    expect(installer).to.exist;
  });

  it('makes sure packages is an array', () => {
    expect(packages).to.be.an('array')
  });

  it('should return packages with no dependency into a new array', () => {
    const testArray = ["sponge: ", "bob: ", "square: sponge" ];
    installer(testArray);
    expect(arrayA).to.have.lengthOf(2);
  })

  it('should return packages with a dependency to a new array', () => {
    const testArray2 = ["sponge: ", "bob: ", "pants: square", "square: sponge"];
    installer(testArray2);
    expect(arrayB).to.have.lengthOf(2);
  })

  it('breaks up array b into an array of arrays based on the :', () => {
    const testArray2 = ["sponge: ", "bob: ", "pants: square", "square: sponge"];
    installer(testArray2)
   expect(arrayC[0][0]).to.have.lengthOf(2)
 })

});
