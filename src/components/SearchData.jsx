import React from "react";
import { Input } from "antd";
import { useDispatch } from "react-redux";

const { Search } = Input;

export default function SearchData({
  searchValue,
  setSearchValue,
  placeholder,
  size,
}) {
  const dispatch = useDispatch();

  return (
    <div>
      <Search
        placeholder={placeholder || "Recherchez ici"}
        value={searchValue}
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
        allowClear
        enterButton
        size={size || "large"}
      />
    </div>
  );
}
