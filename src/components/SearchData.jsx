import React from "react";
import { Input } from "antd";
import { useDispatch } from "react-redux";

const { Search } = Input;

export default function SearchData({
  searchValue,
  setSearchValue,
  placeholder,
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
        size="large"
      />
    </div>
  );
}
