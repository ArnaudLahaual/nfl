import React from "react";
import { Select } from "antd";

const { Option } = Select;

export default function SelectData({
  options = [],
  placeholder = "",
  onChange,
  value = null,
  allowClear = true,
  size = "large",
}) {
  return (
    <Select
      allowClear={allowClear}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      size={size}
    >
      {options.map((opt) => (
        <Option key={opt.value} value={opt.value}>
          {opt.label}
        </Option>
      ))}
    </Select>
  );
}
