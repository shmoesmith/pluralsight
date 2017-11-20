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
    let testArray = ["sponge: ", "bob: ", "pants: square", "square: sponge", "star: bob" ];
    installer(testArray);
    expect(arrayA).to.include("sponge: ");
    expect(arrayA).to.not.include("pants: square")
  })

  it('should return packages with a dependency to a new array', () => {
    expect(arrayB).to.not.include("spong: ")
    expect(arrayB).to.include("pants: square")
  })

  it('breaks up array b into an array of arrays based on the :', () => {
   expect(arrayC[0][0]).to.have.lengthOf(2)
 })

 it('finds out if the dependency is in arrayA already, if true, moves to arrayA', () => {
   expect(arrayA).to.have.lengthOf(4)
 })

});
