import React from "react";

function SearchFilter({
  searchTerm,
  setSearchTerm,
  searchPlaceHolderName,
  searchFilterClassName,
  searchFilterParentDivClassName,
}) {
  return (
    <div className={searchFilterParentDivClassName}>
      <input
        type="text"
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
