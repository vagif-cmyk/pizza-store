import React, { useContext, useRef, useCallback, useState } from "react";
import debounce from "lodash.debounce";
import styles from "./Search.module.scss";
import { SearchContext } from "../../App";

const Search = () => {
  const [value, setValue] = useState("");
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const inputElement = useRef();

  function onClickCross() {
    setValue("");
    setSearchValue("");
    inputElement.current.focus();
  }

  const onUpdateValue = useCallback(
    debounce((str) => setSearchValue(str), 500),
    []
  );
  const onChangeInput = (event) => {
    setValue(event.target.value);
    onUpdateValue(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d="M18,10a8,8,0,1,0-3.1,6.31l6.4,6.4,1.41-1.41-6.4-6.4A8,8,0,0,0,18,10Zm-8,6a6,6,0,1,1,6-6A6,6,0,0,1,10,16Z" />
        </g>
      </svg>
      <input
        ref={inputElement}
        value={value}
        onChange={onChangeInput}
        placeholder="поиск пиццы..."
        type="text"
        className={styles.input}
      ></input>
      {searchValue && (
        <svg
          className={styles.close}
          onClick={onClickCross}
          viewBox="0 0 20 19.84"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.17,10l3.89-3.89a.37.37,0,1,0-.53-.53L9.64,9.43,5.75,5.54a.37.37,0,1,0-.53.53L9.11,10,5.22,13.85a.37.37,0,0,0,0,.53.34.34,0,0,0,.26.11.36.36,0,0,0,.27-.11l3.89-3.89,3.89,3.89a.34.34,0,0,0,.26.11.35.35,0,0,0,.27-.11.37.37,0,0,0,0-.53Z" />
        </svg>
      )}
    </div>
  );
};

export default Search;
