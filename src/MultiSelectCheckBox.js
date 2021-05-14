import React from "react";
import SelectAllCheckBox from "./SelectAllCheckBox";
import ListAllCheckBox from "./ListAllCheckBox";

export function MultiSelectCheckBox({
  CheckBoxList = [],
  onChange,
  selectAllShow,
  listOfCheckBoxItemsClassName = "",
  selectAllShowClassName = "",
}) {
  let checkBoxArr = CheckBoxList.map((item) => ({
    ...item,
    is_active: false,
  }));
  const [selectCheckBox, setSelectCheckBox] = React.useState(checkBoxArr);
  return (
    <div>
      {selectAllShow && (
        <div style={{ marginBottom: "10px" }}>
          <SelectAllCheckBox
            selectCheckBox={selectCheckBox}
            setSelectCheckBox={setSelectCheckBox}
            onChange={function (item) {
              onChange(item);
            }}
            selectAllShowClassName={selectAllShowClassName}
          />
        </div>
      )}
      <ListAllCheckBox
        listOfCheckBoxItemsClassName={listOfCheckBoxItemsClassName}
        selectCheckBox={selectCheckBox}
        setSelectCheckBox={setSelectCheckBox}
        onChange={function (item) {
          onChange(item);
        }}
      />
    </div>
  );
}
