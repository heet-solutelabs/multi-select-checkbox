import React from "react";
import PropTypes from "prop-types";
import { assignOption } from "./utils/DisplayOptions";
import SelectAllCheckBox from "./SelectAllCheckBox";
import ListAllCheckBox from "./ListAllCheckBox";
import SearchFilter from "./SearchFilter";

export function MultiSelectCheckBox({
  searchLabelClassName = "",
  searchLabelName = "",
  searchFilterParentDivClassName = "",
  searchFilterClassName = "",
  searchPlaceHolderName = "",
  showSearchBox = true,
  CheckBoxList = [],
  onChange = function (item) {},
  selectAllShow = true,
  listOfCheckBoxItemsClassName = "",
  selectAllShowClassName = "",
  selectAllLabelName = "Select All...",
  selectAllClassLabelName = "",
  listOfCheckBoxItemsLabelClassName = "",
  selectAllParentDivClassName = "",
  listOfAllCheckBoxParentDivClassName = "",
  selectedCheckBox = [],
}) {
  let checkBoxArr = assignOption(CheckBoxList, selectedCheckBox);
  const [viewCheckBox, setViewCheckBox] = React.useState(CheckBoxList);
  const [selectCheckBox, setSelectCheckBox] = React.useState(checkBoxArr);
  const [searchTerm, setSearchTerm] = React.useState("");
  function onChangedData(item) {
    onChange(item);
  }

  React.useEffect(() => {
    if (searchTerm && searchTerm.length > 0) {
      let arr = selectCheckBox.filter((findSearchValue) => {
        return findSearchValue.value
          .toLowerCase()
          .trim()
          .includes(searchTerm.toLowerCase().trim());
      });
      setViewCheckBox(arr);
    } else {
      setViewCheckBox(selectCheckBox);
    }
  }, [searchTerm, selectCheckBox]);
  return (
    <>
      {showSearchBox && (
        <SearchFilter
          searchLabelClassName={searchLabelClassName}
          searchLabelName={searchLabelName}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchFilterClassName={searchFilterClassName}
          searchPlaceHolderName={searchPlaceHolderName}
          searchFilterParentDivClassName={searchFilterParentDivClassName}
        />
      )}
      {selectAllShow && searchTerm.length === 0 && (
        <SelectAllCheckBox
          viewCheckBox={viewCheckBox}
          onChange={onChangedData}
          selectAllShowClassName={selectAllShowClassName}
          selectAllLabelName={selectAllLabelName}
          selectAllClassLabelName={selectAllClassLabelName}
          selectAllParentDivClassName={selectAllParentDivClassName}
          setSelectCheckBox={setSelectCheckBox}
          selectCheckBox={selectCheckBox}
        />
      )}
      <ListAllCheckBox
        listOfAllCheckBoxParentDivClassName={
          listOfAllCheckBoxParentDivClassName
        }
        selectCheckBox={selectCheckBox}
        listOfCheckBoxItemsClassName={listOfCheckBoxItemsClassName}
        listOfCheckBoxItemsLabelClassName={listOfCheckBoxItemsLabelClassName}
        viewCheckBox={viewCheckBox}
        onChange={onChangedData}
        setSelectCheckBox={setSelectCheckBox}
      />
    </>
  );
}

MultiSelectCheckBox.propTypes = {
  searchLabelClassName: PropTypes.string,
  searchLabelName: PropTypes.string,
  searchFilterParentDivClassName: PropTypes.string,
  searchFilterClassName: PropTypes.string,
  searchPlaceHolderName: PropTypes.string,
  showSearchBox: PropTypes.bool,
  CheckBoxList: PropTypes.array,
  onChange: PropTypes.func,
  selectAllShow: PropTypes.bool,
  listOfCheckBoxItemsClassName: PropTypes.string,
  selectAllShowClassName: PropTypes.string,
  selectAllLabelName: PropTypes.string,
  selectAllClassLabelName: PropTypes.string,
  listOfCheckBoxItemsLabelClassName: PropTypes.string,
  selectAllParentDivClassName: PropTypes.string,
  listOfAllCheckBoxParentDivClassName: PropTypes.string,
  selectedCheckBox: PropTypes.array,
};
