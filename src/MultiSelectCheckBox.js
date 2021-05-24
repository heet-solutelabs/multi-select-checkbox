import React from "react";
import SelectAllCheckBox from "./SelectAllCheckBox";
import ListAllCheckBox from "./ListAllCheckBox";

function checkedSelectedOption(CheckBoxList, selectedOption) {
  return CheckBoxList.map((item) => {
    for (let option of selectedOption) {
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
function assignOption(CheckBoxList, selectedOption) {
  if (
    Array.isArray(CheckBoxList) &&
    CheckBoxList.length > 0 &&
    CheckBoxList.every((item) => "label" in item && "value" in item)
  ) {
    if (
      Array.isArray(selectedOption) &&
      selectedOption.length > 0 &&
      selectedOption.every((item) => "label" in item && "value" in item)
    ) {
      return checkedSelectedOption(CheckBoxList, selectedOption);
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
  selectedOption = [],
}) {
  let checkBoxArr = assignOption(CheckBoxList, selectedOption);
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
