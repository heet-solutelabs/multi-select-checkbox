import PassOnChangeDataFun from "./utils/PassOnChangeDataFun";

function SelectAllCheckBox({
  selectCheckBox = [],
  setSelectCheckBox = [],
  onChange,
  selectAllShowClassName,
  selectAllLabelName,
}) {
  return (
    <>
      {Array.isArray(selectCheckBox) &&
        selectCheckBox.length > 0 &&
        selectCheckBox.some((item) => item.label && item.value) && (
          <>
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
            <label htmlFor="select_all_checkbox">{selectAllLabelName}</label>
          </>
        )}
    </>
  );
}

export default SelectAllCheckBox;
