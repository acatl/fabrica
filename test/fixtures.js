'use strict';

function getFixtureSource() {
  return {
    a: 'test'
  };
}
exports.getFixtureSource = getFixtureSource;

function getFixtureDefault() {
  return {
    a: 'default',
    b: 1,
  };
}
exports.getFixtureDefault = getFixtureDefault;

var fooDefaults = {
  name: 'foo',
  age: 36
};

function factoryFoo(spec) {
  var i = {};
  i.name = typeof spec.name === 'undefined' ? fooDefaults.name : spec.name;
  i.age = typeof spec.age === 'undefined' ? fooDefaults.age : spec.age;
  return i;
}
exports.factoryFoo = factoryFoo;
