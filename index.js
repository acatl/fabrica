'use strict';

function getValue(src, def) {
    return typeof src === 'undefined' ? def : src;
}

function getValueByKey(key, src, def) {
    return getValue(src[key], def[key]);
}

function setKey(key, src, def) {
    return src[key] = getValue(src[key], def[key]);
}

function getKeyObject(src, def, factory) {
    def = getValue(def, {});
    var value = getValue(src, def);
    return factory(value);
}

function setObject(key, src, def, factory) {
    return src[key] = getKeyObject.call(null, src[key], def[key], factory);
}

function getCollection(src, defItem, itemFactory) {
    src = getValue(src, []);
    return src.map(itemFactory);
}

function setCollection(key, src, defItem, itemFactory) {
    return src[key] = getCollection(src[key], defItem, itemFactory);
}
