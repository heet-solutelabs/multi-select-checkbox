"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _PassOnChangeDataFun = _interopRequireDefault(require("./utils/PassOnChangeDataFun"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ListAllCheckBox(_ref) {
  var _ref$viewCheckBox = _ref.viewCheckBox,
      viewCheckBox = _ref$viewCheckBox === void 0 ? [] : _ref$viewCheckBox,
      _onChange = _ref.onChange,
      listOfCheckBoxItemsClassName = _ref.listOfCheckBoxItemsClassName,
      listOfCheckBoxItemsLabelClassName = _ref.listOfCheckBoxItemsLabelClassName,
      listOfAllCheckBoxParentDivClassName = _ref.listOfAllCheckBoxParentDivClassName,
      setSelectCheckBox = _ref.setSelectCheckBox,
      selectCheckBox = _ref.selectCheckBox;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: Array.isArray(viewCheckBox) && viewCheckBox.length > 0 && viewCheckBox.every(function (item) {
      return "label" in item && "value" in item;
    }) && viewCheckBox.map(function (item, index) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: listOfAllCheckBoxParentDivClassName,
        children: item.label && item.value && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react.default.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            id: index,
            className: listOfCheckBoxItemsClassName,
            type: "checkbox",
            checked: selectCheckBox.find(function (items) {
              return items.label === item.label;
            }).is_active,
            onChange: function onChange(e) {
              var selectedCheckBox = selectCheckBox.map(function (current_item) {
                if (Object.is(current_item.label, item.label)) {
                  return _objectSpread(_objectSpread({}, current_item), {}, {
                    is_active: e.target.checked
                  });
                }

                return _objectSpread({}, current_item);
              });

              _onChange((0, _PassOnChangeDataFun.default)(selectedCheckBox));

              setSelectCheckBox(selectedCheckBox);
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            htmlFor: index,
            className: listOfCheckBoxItemsLabelClassName,
            children: item.label
          })]
        })
      }, index);
    })
  });
}

var _default = /*#__PURE__*/_react.default.memo(ListAllCheckBox);

exports.default = _default;