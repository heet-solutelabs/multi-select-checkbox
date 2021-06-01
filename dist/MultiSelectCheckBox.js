"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiSelectCheckBox = MultiSelectCheckBox;

var _react = _interopRequireDefault(require("react"));

var _DisplayOptions = require("./utils/DisplayOptions");

var _SelectAllCheckBox = _interopRequireDefault(require("./SelectAllCheckBox"));

var _ListAllCheckBox = _interopRequireDefault(require("./ListAllCheckBox"));

var _SearchFilter = _interopRequireDefault(require("./SearchFilter"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function MultiSelectCheckBox(_ref) {
  var _ref$searchLabelClass = _ref.searchLabelClassName,
      searchLabelClassName = _ref$searchLabelClass === void 0 ? "" : _ref$searchLabelClass,
      _ref$searchLabelName = _ref.searchLabelName,
      searchLabelName = _ref$searchLabelName === void 0 ? "" : _ref$searchLabelName,
      _ref$searchFilterPare = _ref.searchFilterParentDivClassName,
      searchFilterParentDivClassName = _ref$searchFilterPare === void 0 ? "" : _ref$searchFilterPare,
      _ref$searchFilterClas = _ref.searchFilterClassName,
      searchFilterClassName = _ref$searchFilterClas === void 0 ? "" : _ref$searchFilterClas,
      _ref$searchPlaceHolde = _ref.searchPlaceHolderName,
      searchPlaceHolderName = _ref$searchPlaceHolde === void 0 ? "" : _ref$searchPlaceHolde,
      _ref$showSearchBox = _ref.showSearchBox,
      showSearchBox = _ref$showSearchBox === void 0 ? true : _ref$showSearchBox,
      _ref$CheckBoxList = _ref.CheckBoxList,
      CheckBoxList = _ref$CheckBoxList === void 0 ? [] : _ref$CheckBoxList,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function (item) {} : _ref$onChange,
      selectAllShow = _ref.selectAllShow,
      _ref$listOfCheckBoxIt = _ref.listOfCheckBoxItemsClassName,
      listOfCheckBoxItemsClassName = _ref$listOfCheckBoxIt === void 0 ? "" : _ref$listOfCheckBoxIt,
      _ref$selectAllShowCla = _ref.selectAllShowClassName,
      selectAllShowClassName = _ref$selectAllShowCla === void 0 ? "" : _ref$selectAllShowCla,
      _ref$selectAllLabelNa = _ref.selectAllLabelName,
      selectAllLabelName = _ref$selectAllLabelNa === void 0 ? "Select All..." : _ref$selectAllLabelNa,
      _ref$selectAllClassLa = _ref.selectAllClassLabelName,
      selectAllClassLabelName = _ref$selectAllClassLa === void 0 ? "" : _ref$selectAllClassLa,
      _ref$listOfCheckBoxIt2 = _ref.listOfCheckBoxItemsLabelClassName,
      listOfCheckBoxItemsLabelClassName = _ref$listOfCheckBoxIt2 === void 0 ? "" : _ref$listOfCheckBoxIt2,
      _ref$selectAllParentD = _ref.selectAllParentDivClassName,
      selectAllParentDivClassName = _ref$selectAllParentD === void 0 ? "" : _ref$selectAllParentD,
      _ref$listOfAllCheckBo = _ref.listOfAllCheckBoxParentDivClassName,
      listOfAllCheckBoxParentDivClassName = _ref$listOfAllCheckBo === void 0 ? "" : _ref$listOfAllCheckBo,
      _ref$selectedCheckBox = _ref.selectedCheckBox,
      selectedCheckBox = _ref$selectedCheckBox === void 0 ? [] : _ref$selectedCheckBox;
  var checkBoxArr = (0, _DisplayOptions.assignOption)(CheckBoxList, selectedCheckBox);

  var _React$useState = _react.default.useState(CheckBoxList),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      viewCheckBox = _React$useState2[0],
      setViewCheckBox = _React$useState2[1];

  var _React$useState3 = _react.default.useState(checkBoxArr),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      selectCheckBox = _React$useState4[0],
      setSelectCheckBox = _React$useState4[1];

  var _React$useState5 = _react.default.useState(""),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      searchTerm = _React$useState6[0],
      setSearchTerm = _React$useState6[1];

  function onChangedData(item) {
    onChange(item);
  }

  _react.default.useEffect(function () {
    if (searchTerm && searchTerm.length > 0) {
      var arr = selectCheckBox.filter(function (findSearchValue) {
        return findSearchValue.value.toLowerCase().trim().includes(searchTerm.toLowerCase().trim());
      });
      setViewCheckBox(arr);
    } else {
      setViewCheckBox(selectCheckBox);
    }
  }, [searchTerm, selectCheckBox]);

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [showSearchBox && /*#__PURE__*/(0, _jsxRuntime.jsx)(_SearchFilter.default, {
      viewCheckBox: viewCheckBox,
      searchLabelClassName: searchLabelClassName,
      searchLabelName: searchLabelName,
      searchTerm: searchTerm,
      setSearchTerm: setSearchTerm,
      searchFilterClassName: searchFilterClassName,
      searchPlaceHolderName: searchPlaceHolderName,
      searchFilterParentDivClassName: searchFilterParentDivClassName
    }), selectAllShow && searchTerm.length === 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectAllCheckBox.default, {
      viewCheckBox: viewCheckBox,
      onChange: onChangedData,
      selectAllShowClassName: selectAllShowClassName,
      selectAllLabelName: selectAllLabelName,
      selectAllClassLabelName: selectAllClassLabelName,
      selectAllParentDivClassName: selectAllParentDivClassName,
      setSelectCheckBox: setSelectCheckBox,
      selectCheckBox: selectCheckBox
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListAllCheckBox.default, {
      listOfAllCheckBoxParentDivClassName: listOfAllCheckBoxParentDivClassName,
      selectCheckBox: selectCheckBox,
      listOfCheckBoxItemsClassName: listOfCheckBoxItemsClassName,
      listOfCheckBoxItemsLabelClassName: listOfCheckBoxItemsLabelClassName,
      viewCheckBox: viewCheckBox,
      onChange: onChangedData,
      setSelectCheckBox: setSelectCheckBox
    })]
  });
}