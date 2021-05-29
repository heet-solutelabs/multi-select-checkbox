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
export function assignOption(CheckBoxList, selectedCheckBox) {
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
