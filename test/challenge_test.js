var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var challenge = require('../app/challenge.js');
var installer = challenge.installer;
var packages = challenge.packages;
let arrayA = challenge.arrayA;

describe('Challenge', () => {
  it('makes sure the function exists', () => {
    expect(installer).to.exist;
  });

  it('makes sure packages is an array', () => {
    expect(packages).to.be.an('array')
  });

  it('should return packages with no dependecy into a new array', () => {
    let testArray = ["sponge: ", "bob: ", "square: sponge" ];
    installer(testArray);
    expect(arrayA).to.have.lengthOf(2);
  })

});
