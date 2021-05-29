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
        selectedCheckBox={[
          {
            label: "eat",
            value: "eat",
          },
        ]}
        searchFilterParentDivClassName="searchFilterParentDivClassName"
        searchFilterClassName="searchFilterClassName"
        searchPlaceHolderName="Search Here..."
        showSearchBox={true}
        selectAllClassLabelName="select_all_label_class_name"
        listOfCheckBoxItemsLabelClassName="list_of_checkbox_item_label_class_name"
        selectAllParentDivClassName="selectAllParentDivClassName"
        listOfAllCheckBoxParentDivClassName="listOfAllCheckBoxParentDivClassName"
        selectAllShowClassName="select_all_checkbox_classname"
        listOfCheckBoxItemsClassName="list_of_all_checkbox_classname"
        CheckBoxList={CheckBoxList}
        selectAllLabelName="Select All..."
        onChange={function (item) {
          //  get All list of selected Item....
          setSelectedValue(item);
        }}
      />
    </>
  );
}
