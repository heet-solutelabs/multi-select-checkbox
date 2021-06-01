import React from "react";
import PassOnChangeDataFun, {
  checkArrContainsLabelValue,
} from "./utils/PassOnChangeDataFun";

function SelectAllCheckBox({
  viewCheckBox = [],
  onChange,
  selectAllShowClassName,
  selectAllLabelName,
  selectAllClassLabelName,
  selectAllParentDivClassName,
  setSelectCheckBox,
  selectCheckBox,
}) {
  return (
    <>
      {checkArrContainsLabelValue(viewCheckBox) && (
        <div className={selectAllParentDivClassName}>
          <input
            id="select_all_checkbox"
            className={selectAllShowClassName}
            checked={selectCheckBox.every((item) => item.is_active === true)}
            type="checkbox"
            onChange={(e) => {
              let selectedAllCheckBox = selectCheckBox.map((item) => ({
                ...item,
                is_active: e.target.checked,
              }));
              onChange(PassOnChangeDataFun(selectedAllCheckBox));
              setSelectCheckBox(selectedAllCheckBox);
            }}
          />
          <label
            htmlFor="select_all_checkbox"
            className={selectAllClassLabelName}
          >
            {selectAllLabelName}
          </label>
        </div>
      )}
    </>
  );
}

export default React.memo(SelectAllCheckBox);
