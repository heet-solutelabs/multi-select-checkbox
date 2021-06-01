import React from "react";

function SearchFilter({
  searchLabelClassName,
  searchLabelName,
  searchTerm,
  setSearchTerm,
  searchPlaceHolderName,
  searchFilterClassName,
  searchFilterParentDivClassName,
}) {
  return (
    <div className={searchFilterParentDivClassName}>
      <label htmlFor="searchTerm" className={searchLabelClassName}>
        {searchLabelName}
      </label>
      <input
        id="searchTerm"
        name="searchTerm"
        type="search"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        className={searchFilterClassName}
        placeholder={searchPlaceHolderName}
      />
    </div>
  );
}

export default React.memo(SearchFilter);
