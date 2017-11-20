var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var challenge = require('../app/challenge.js');
var installer = challenge.installer;
var packages = challenge.packages;

describe('Challenge', () => {
  it('makes sure the function exists', () => {
    expect(installer).to.exist;
  });

  it('makes sure packages are an array', () => {
    expect(packages).to.be.an('array')
  });


});
