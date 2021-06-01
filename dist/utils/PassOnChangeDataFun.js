"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = passOnChangeDataFun;
exports.checkArrContainsLabelValue = checkArrContainsLabelValue;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function passOnChangeDataFun(selectedCheckBox) {
  var passOnChangedData = selectedCheckBox.filter(function (item) {
    return item.is_active;
  });
  var newArr = passOnChangedData.map(function (item) {
    var obj = _objectSpread({}, item);

    delete obj.is_active;
    return obj;
  });
  return newArr;
}

function checkArrContainsLabelValue(viewCheckBox) {
  return Array.isArray(viewCheckBox) && viewCheckBox.length > 0 && viewCheckBox.every(function (item) {
    return item.label && item.value;
  });
}