export default function passOnChangeDataFun(selectedCheckBox) {
  let passOnChangedData = selectedCheckBox.filter((item) => item.is_active);
  let newArr = passOnChangedData.map((item) => {
    let obj = { ...item };
    delete obj.is_active;
    return obj;
  });
  return newArr;
}

export function checkArrContainsLabelValue(viewCheckBox) {
  return (
    Array.isArray(viewCheckBox) &&
    viewCheckBox.length > 0 &&
    viewCheckBox.every((item) => item.label && item.value)
  );
}
