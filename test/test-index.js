'use strict';

var should = require('should');
var fabrica = require('../');
var fixtures = require('./fixtures');

describe('all', function() {
  describe('#getValue', function() {
    it('should return default value if src is undefined', function() {
      var a;
      a = fabrica.getValue(a, 2);
      a.should.be.eql(2);
    });
  });

  describe('#getValueByKey', function() {
    before(function() {
      var src = fixtures.getFixtureSource();
      var def = fixtures.getFixtureDefault();
      this.val1 = fabrica.getValueByKey('a', src, def);
      this.val2 = fabrica.getValueByKey('b', src, def);
    });

    it('should return default value if src[key] is undefined', function() {
      this.val1.should.be.eql('test');
      this.val2.should.be.eql(1);
    });
  });

  describe('#setKey', function() {
    before(function() {
      this.src = fixtures.getFixtureSource();
      this.def = fixtures.getFixtureDefault();
    });

    it('should return assinged value to key', function() {
      var val = fabrica.setKey('a', this.src, this.def);
      val.should.be.eql('test');
    });

    it('should set default value if src[key] is undefined', function() {
      fabrica.setKey('b', this.src, this.def);
      this.src.b.should.be.eql(1);
    });
  });

  describe('#createObject', function() {
    before(function() {
      var src = {
        name: 'name'
      };

      this.val = fabrica.createObject(src, fixtures.factoryFoo);
    });

    it('should return pass value to factory and return it', function() {
      this.val.should.eql({
        age: 36,
        name: 'name'
      });
    });
  });

  describe('#setObject', function() {
    before(function() {
      this.val = {
        person: {
          name: 'name'
        }
      };
      fabrica.setObject('person', this.val, fixtures.factoryFoo);
    });

    it('should create object and set object\'s key', function() {
      this.val.person.should.eql({
        age: 36,
        name: 'name'
      });
    });
  });

  describe('#getCollection', function() {
    before(function() {
      var src = {
        people: [{
          name: 'name'
        }]
      };
      this.val = fabrica.getCollection(src.people, fixtures.factoryFoo);
    });

    it('should run factory against collection and return new mapped result', function() {
      this.val.should.eql([{
        age: 36,
        name: 'name'
      }]);
    });
  });

  describe('#setCollection', function() {
    before(function() {
      this.val = {
        people: [{
          name: 'name'
        }]
      };
      fabrica.setCollection('people', this.val, fixtures.factoryFoo);
    });

    it('should run factory against collection and set new mapped result to object\'s key ', function() {
      this.val.people.should.eql([{
        age: 36,
        name: 'name'
      }]);
    });
  });
});
