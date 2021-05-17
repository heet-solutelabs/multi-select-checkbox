import React from "react";
import SelectAllCheckBox from "./SelectAllCheckBox";
import ListAllCheckBox from "./ListAllCheckBox";

export function MultiSelectCheckBox({
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
}) {
  let checkBoxArr = CheckBoxList.map((item) => ({
    ...item,
    is_active: false,
  }));
  const [selectCheckBox, setSelectCheckBox] = React.useState(checkBoxArr);

  function onChangedData(item) {
    onChange(item);
  }

  return (
    <>
      {selectAllShow && (
        <SelectAllCheckBox
          selectCheckBox={selectCheckBox}
          setSelectCheckBox={setSelectCheckBox}
          onChange={onChangedData}
          selectAllShowClassName={selectAllShowClassName}
          selectAllLabelName={selectAllLabelName}
          selectAllClassLabelName={selectAllClassLabelName}
          selectAllParentDivClassName={selectAllParentDivClassName}
        />
      )}
      <ListAllCheckBox
        listOfAllCheckBoxParentDivClassName={
          listOfAllCheckBoxParentDivClassName
        }
        listOfCheckBoxItemsClassName={listOfCheckBoxItemsClassName}
        listOfCheckBoxItemsLabelClassName={listOfCheckBoxItemsLabelClassName}
        selectCheckBox={selectCheckBox}
        setSelectCheckBox={setSelectCheckBox}
        onChange={onChangedData}
      />
    </>
  );
}
