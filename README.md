# MultiSelectCheckBox

Simple and lightweight multiple selection component with checkboxes, search and select-all

## ✨ Features

- Select All Checkbox Field
- Search Box for searching list of checkbox items
- Web Accessibility(no need of mouse => Use `space` to select/unselect checkbox , Use `tab` for switching element)

# Installation and usage

```
yarn add multi-select-checkbox
npm i multi-select-checkbox
```

Then use it in your app:

#### With React Component

```js
import React from "react";
import { MultiSelectCheckBox } from "multi-select-checkbox/dist/MultiSelectCheckBox";

function App() {
  const CheckBoxList = [
    {
      label: "eat",
      value: "eat",
    },
    {
      label: "sleep",
      value: "sleep",
    },
    {
      label: "coding",
      value: "coding",
    },
    {
      label: "Repeat",
      value: "Repeat",
    },
    {
      label: "Reapeat again!",
      value: "Reapeat again!",
    },
    {
      label: "Reapeat again again!",
      value: "Reapeat again again!",
    },
  ];
  const [selectedValue, setSelectedValue] = React.useState([]);

  return (
    <div className="">
      <p>{JSON.stringify(selectedValue, null, 2)}</p>
      <MultiSelectCheckBox
        selectAllShow={true}
        selectedCheckBox={[
          {
            label: "eat",
            value: "eat",
          },
        ]}
        searchLabelName="Search : "
        searchLabelClassName="searchLabelClassName"
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
    </div>
  );
}

export default App;
```

## Props

Common props you may want to specify include:

- `selectAllShow` - show select all option
- `selectedCheckBox` - show already selected checkbox
- `selectAllClassLabelName` - apply a className to the select all label tag
- `selectAllParentDivClassName` - apply classNames to select all div tag,which contains select all checkbox field and label
- `selectAllShowClassName` - apply a className to the select all checkbox
- `selectAllLabelName` - change the text of select all label name
- `listOfCheckBoxItemsLabelClassName` - apply a className to the list of checkbox items label
- `listOfAllCheckBoxParentDivClassName` - apply classNames to list of checkbox items div tag,which contains list of checkbox field and label
- `listOfCheckBoxItemsClassName` - apply a className to the list of checkboxes
- `CheckBoxList` - need to pass an array of an objects , to show list of all checkbox items
- `onChange` - get All list of selected Item
- `searchFilterParentDivClassName` - search box parent div class name
- `searchFilterClassName` - search box class name
- `searchPlaceHolderName` - search box placeholder name
- `showSearchBox` - show search box , by default it will be true
- `searchLabelName` - search label name
- `searchLabelClassName` - search label class name
