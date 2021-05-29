"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assignOption = assignOption;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function checkedSelectedOption(CheckBoxList, selectedCheckBox) {
  return CheckBoxList.map(function (item) {
    var _iterator = _createForOfIteratorHelper(selectedCheckBox),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var option = _step.value;

        if (Object.is(option.label, item.label)) {
          return _objectSpread(_objectSpread({}, item), {}, {
            is_active: true
          });
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return _objectSpread(_objectSpread({}, item), {}, {
      is_active: false
    });
  });
}

function listOfAllCheckBox(CheckBoxList) {
  return CheckBoxList.map(function (item) {
    return _objectSpread(_objectSpread({}, item), {}, {
      is_active: false
    });
  });
}

function assignOption(CheckBoxList, selectedCheckBox) {
  if (Array.isArray(CheckBoxList) && CheckBoxList.length > 0 && CheckBoxList.every(function (item) {
    return "label" in item && "value" in item;
  })) {
    if (Array.isArray(selectedCheckBox) && selectedCheckBox.length > 0 && selectedCheckBox.every(function (item) {
      return "label" in item && "value" in item;
    })) {
      return checkedSelectedOption(CheckBoxList, selectedCheckBox);
    } else {
      return listOfAllCheckBox(CheckBoxList);
    }
  } else {
    return [];
  }
}