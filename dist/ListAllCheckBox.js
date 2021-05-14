"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ListAllCheckBox(_ref) {
  var _ref$selectCheckBox = _ref.selectCheckBox,
      selectCheckBox = _ref$selectCheckBox === void 0 ? [] : _ref$selectCheckBox,
      setSelectCheckBox = _ref.setSelectCheckBox,
      _onChange = _ref.onChange,
      listOfCheckBoxItemsClassName = _ref.listOfCheckBoxItemsClassName;
  return /*#__PURE__*/React.createElement(React.Fragment, null, Array.isArray(selectCheckBox) && selectCheckBox.length > 0 && selectCheckBox.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index
    }, item.label && item.value && /*#__PURE__*/React.createElement("div", {
      className: "flex",
      style: {
        marginBottom: "10px"
      }
    }, /*#__PURE__*/React.createElement("input", {
      id: index,
      className: listOfCheckBoxItemsClassName,
      type: "checkbox",
      checked: selectCheckBox && selectCheckBox.length > 0 && selectCheckBox.every(function (item) {
        return item.is_active === true;
      }) ? true : selectCheckBox !== null && selectCheckBox !== void 0 && selectCheckBox.find(function (current_selectbox) {
        return Object.is(current_selectbox === null || current_selectbox === void 0 ? void 0 : current_selectbox.is_active, item.is_active);
      }) ? selectCheckBox === null || selectCheckBox === void 0 ? void 0 : selectCheckBox.find(function (current_selectbox) {
        return Object.is(current_selectbox === null || current_selectbox === void 0 ? void 0 : current_selectbox.is_active, item.is_active);
      }).is_active : false,
      onChange: function onChange(e) {
        var selectedCheckBox = _toConsumableArray(selectCheckBox).map(function (current_item) {
          if (Object.is(current_item.label, item.label)) {
            return _objectSpread(_objectSpread({}, current_item), {}, {
              is_active: e.target.checked
            });
          } else {
            return _objectSpread({}, current_item);
          }
        });

        var passOnChangedData = selectedCheckBox.filter(function (item) {
          return item.is_active;
        }).map(function (item) {
          return _objectSpread({}, item);
        });

        _onChange(passOnChangedData.map(function (item) {
          delete item.is_active;
          return _objectSpread({}, item);
        }));

        setSelectCheckBox(selectedCheckBox);
      }
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: index
    }, item.label)));
  }));
}

var _default = ListAllCheckBox;
exports.default = _default;