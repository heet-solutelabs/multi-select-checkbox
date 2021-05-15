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
              checked={
                Array.isArray(selectCheckBox) &&
                selectCheckBox.length > 0 &&
                selectCheckBox.every((item) => item.is_active === true)
              }
              type="checkbox"
              onChange={function (e) {
                let selectedAllCheckBox = [...selectCheckBox].map(function (
                  item
                ) {
                  let obj = {
                    ...item,
                    is_active: e.target.checked,
                  };
                  return obj;
                });
                let passOnChangeData = selectedAllCheckBox
                  .filter((item) => item.is_active)
                  .map(function (item) {
                    return {
                      ...item,
                    };
                  });
                onChange(
                  passOnChangeData.map((item) => {
                    delete item.is_active;
                    return { ...item };
                  })
                );
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
