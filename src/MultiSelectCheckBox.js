import React from "react";
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
  selectAllShow,
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
          viewCheckBox={viewCheckBox}
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
