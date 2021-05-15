import PassOnChangeDataFun from "./utils/PassOnChangeDataFun";

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
        selectCheckBox.map((item, index) => (
          <div key={index}>
            {item.label && item.value && (
              <div className="flex" style={{ marginBottom: "10px" }}>
                <input
                  id={index}
                  className={listOfCheckBoxItemsClassName}
                  type="checkbox"
                  checked={item?.is_active}
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
                <label htmlFor={index}>{item.label}</label>
              </div>
            )}
          </div>
        ))}
    </>
  );
}

export default ListAllCheckBox;
