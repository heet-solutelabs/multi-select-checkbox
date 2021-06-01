import React from "react";
import PassOnChangeDataFun, {
  checkArrContainsLabelValue,
} from "./utils/PassOnChangeDataFun";

function ListAllCheckBox({
  viewCheckBox = [],
  onChange,
  listOfCheckBoxItemsClassName,
  listOfCheckBoxItemsLabelClassName,
  listOfAllCheckBoxParentDivClassName,
  setSelectCheckBox,
  selectCheckBox,
}) {
  return (
    <>
      {checkArrContainsLabelValue(viewCheckBox) &&
        viewCheckBox.map((item, index) => (
          <div className={listOfAllCheckBoxParentDivClassName} key={index}>
            <input
              id={index}
              className={listOfCheckBoxItemsClassName}
              type="checkbox"
              checked={
                selectCheckBox.find((items) => {
                  return items.label === item.label;
                }).is_active
              }
              onChange={(e) => {
                let selectedCheckBox = selectCheckBox.map((current_item) => {
                  if (Object.is(current_item.label, item.label)) {
                    return {
                      ...current_item,
                      is_active: e.target.checked,
                    };
                  }
                  return {
                    ...current_item,
                  };
                });
                onChange(PassOnChangeDataFun(selectedCheckBox));
                setSelectCheckBox(selectedCheckBox);
              }}
            />
            <label
              htmlFor={index}
              className={listOfCheckBoxItemsLabelClassName}
            >
              {item.label}
            </label>
          </div>
        ))}
    </>
  );
}

export default React.memo(ListAllCheckBox);
