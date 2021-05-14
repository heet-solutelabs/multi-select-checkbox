import React from "react";
import { MultiSelectCheckBox } from "./MultiSelectCheckBox";
import { CheckBoxList } from "./CheckBoxList";

export default function App() {
  const [selectedValue, setSelectedValue] = React.useState([]);
  return (
    <>
      <p>{JSON.stringify(selectedValue, null, 2)}</p>
      <MultiSelectCheckBox
        selectAllShow={true}
        selectAllShowClassName="Inside"
        listOfCheckBoxItemsClassName="test"
        CheckBoxList={CheckBoxList}
        onChange={function (item) {
          //  get All list of selected Item....
          setSelectedValue(item);
        }}
      />
    </>
  );
}
