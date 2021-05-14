function SelectAllCheckBox({
  selectCheckBox = [],
  setSelectCheckBox = [],
  onChange,
  selectAllShowClassName,
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
                let arre = selectedAllCheckBox
                  .filter((item) => item.is_active)
                  .map(function (item) {
                    return {
                      ...item,
                    };
                  });
                onChange(
                  arre.map((item) => {
                    delete item.is_active;
                    return { ...item };
                  })
                );
                setSelectCheckBox(selectedAllCheckBox);
              }}
            />
            <label htmlFor="select_all_checkbox">select all</label>
          </>
        )}
    </>
  );
}

export default SelectAllCheckBox;
