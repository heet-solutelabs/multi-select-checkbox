import React from "react";
import SelectAllCheckBox from "./SelectAllCheckBox";
import ListAllCheckBox from "./ListAllCheckBox";

function checkedSelectedOption(CheckBoxList, selectedCheckBox) {
  return CheckBoxList.map((item) => {
    for (let option of selectedCheckBox) {
      if (Object.is(option.label, item.label)) {
        return {
          ...item,
          is_active: true,
        };
      }
    }
    return {
      ...item,
      is_active: false,
    };
  });
}
function listOfAllCheckBox(CheckBoxList) {
  return CheckBoxList.map((item) => ({
    ...item,
    is_active: false,
  }));
}
function assignOption(CheckBoxList, selectedCheckBox) {
  if (
    Array.isArray(CheckBoxList) &&
    CheckBoxList.length > 0 &&
    CheckBoxList.every((item) => "label" in item && "value" in item)
  ) {
    if (
      Array.isArray(selectedCheckBox) &&
      selectedCheckBox.length > 0 &&
      selectedCheckBox.every((item) => "label" in item && "value" in item)
    ) {
      return checkedSelectedOption(CheckBoxList, selectedCheckBox);
    } else {
      return listOfAllCheckBox(CheckBoxList);
    }
  } else {
    return [];
  }
}

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
  selectedCheckBox = [],
}) {
  let checkBoxArr = assignOption(CheckBoxList, selectedCheckBox);
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
