import React from "react";
import { checkArrContainsLabelValue } from "./utils/PassOnChangeDataFun";

function SearchFilter({
  viewCheckBox,
  searchLabelClassName,
  searchLabelName,
  searchTerm,
  setSearchTerm,
  searchPlaceHolderName,
  searchFilterClassName,
  searchFilterParentDivClassName,
}) {
  return (
    checkArrContainsLabelValue(viewCheckBox) && (
      <div className={searchFilterParentDivClassName}>
        <label htmlFor="search" className={searchLabelClassName}>
          {searchLabelName}
        </label>
        <input
          id="search"
          name="search"
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          className={searchFilterClassName}
          placeholder={searchPlaceHolderName}
        />
      </div>
    )
  );
}

export default React.memo(SearchFilter);
