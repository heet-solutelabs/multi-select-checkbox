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
    <div>
      {selectAllShow && (
        <div style={{ marginBottom: "10px" }}>
          <SelectAllCheckBox
            selectCheckBox={selectCheckBox}
            setSelectCheckBox={setSelectCheckBox}
            onChange={onChangedData}
            selectAllShowClassName={selectAllShowClassName}
            selectAllLabelName={selectAllLabelName}
          />
        </div>
      )}
      <ListAllCheckBox
        listOfCheckBoxItemsClassName={listOfCheckBoxItemsClassName}
        selectCheckBox={selectCheckBox}
        setSelectCheckBox={setSelectCheckBox}
        onChange={onChangedData}
      />
    </div>
  );
}
