function ListAllCheckBox({
  selectCheckBox = [],
  setSelectCheckBox,
  onChange,
  listOfCheckBoxItemsClassName,
}) {
  return (
    <>
      {Array.isArray(selectCheckBox) &&
        selectCheckBox.length > 0 &&
        selectCheckBox.map(function (item, index) {
          return (
            <div key={index}>
              {item.label && item.value && (
                <div className="flex" style={{ marginBottom: "10px" }}>
                  <input
                    id={index}
                    className={listOfCheckBoxItemsClassName}
                    type="checkbox"
                    checked={
                      selectCheckBox &&
                      selectCheckBox.length > 0 &&
                      selectCheckBox.every((item) => item.is_active === true)
                        ? true
                        : selectCheckBox?.find((current_selectbox) =>
                            Object.is(
                              current_selectbox?.is_active,
                              item.is_active
                            )
                          )
                        ? selectCheckBox?.find((current_selectbox) =>
                            Object.is(
                              current_selectbox?.is_active,
                              item.is_active
                            )
                          ).is_active
                        : false
                    }
                    onChange={function (e) {
                      let selectedCheckBox = [...selectCheckBox].map(function (
                        current_item
                      ) {
                        if (Object.is(current_item.label, item.label)) {
                          return {
                            ...current_item,
                            is_active: e.target.checked,
                          };
                        } else {
                          return {
                            ...current_item,
                          };
                        }
                      });
                      let passOnChangedData = selectedCheckBox
                        .filter((item) => item.is_active)
                        .map(function (item) {
                          return {
                            ...item,
                          };
                        });

                      onChange(
                        passOnChangedData.map((item) => {
                          delete item.is_active;
                          return { ...item };
                        })
                      );
                      setSelectCheckBox(selectedCheckBox);
                    }}
                  />
                  <label htmlFor={index}>{item.label}</label>
                </div>
              )}
            </div>
          );
        })}
    </>
  );
}

export default ListAllCheckBox;
