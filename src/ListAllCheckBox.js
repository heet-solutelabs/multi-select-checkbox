import React from "react";
import PassOnChangeDataFun from "./utils/PassOnChangeDataFun";

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
      {Array.isArray(viewCheckBox) &&
        viewCheckBox.length > 0 &&
        viewCheckBox.every((item) => "label" in item && "value" in item) &&
        viewCheckBox.map((item, index) => (
          <div className={listOfAllCheckBoxParentDivClassName} key={index}>
            {item.label && item.value && (
              <React.Fragment>
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
                    let selectedCheckBox = selectCheckBox.map(
                      (current_item) => {
                        if (Object.is(current_item.label, item.label)) {
                          return {
                            ...current_item,
                            is_active: e.target.checked,
                          };
                        }
                        return {
                          ...current_item,
                        };
                      }
                    );
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
              </React.Fragment>
            )}
          </div>
        ))}
    </>
  );
}

export default React.memo(ListAllCheckBox);
