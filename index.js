'use strict';

function getValue(src, def) {
  return typeof src === 'undefined' ? def : src;
}
exports.getValue = getValue;

function getKey(key, src, def) {
  return getValue(src[key], def[key]);
}
exports.getKey = getKey;

function setKey(key, target, src, def) {
  var val = target[key] = getValue(src[key], def[key]);
  return val;
}
exports.setKey = setKey;

function createObject(src, factory) {
  return factory(src);
}
exports.createObject = createObject;

function setObject(key, src, factory) {
  var val = getValue(src[key], {});
  src[key] = createObject.call(null, val, factory);
  return src[key];
}
exports.setObject = setObject;

function getCollection(src, itemFactory) {
  src = getValue(src, []);
  return src.map(itemFactory);
}
exports.getCollection = getCollection;

function setCollection(key, src, itemFactory) {
  var val = src[key] = getCollection(src[key], itemFactory);
  return val;
}
exports.setCollection = setCollection;
