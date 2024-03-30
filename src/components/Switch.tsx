"use strict";

import React from "react";
import "./switch.css";

type Props = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  title?: string;
  style?: React.CSSProperties;
  size?: "small" | "medium" | "large";
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "size">;

const Switch = ({
  checked,
  onChange,
  disabled,
  title,
  style,
  size = "medium",
  ...rest
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    onChange && onChange(value);
  };

  return (
    <div style={style}>
      <div className={`title ${size}`}>{title}</div>
      <div className={`switch ${size}`}>
        <label>
          <input
            defaultChecked={checked}
            disabled={disabled}
            onChange={handleChange}
            type="checkbox"
            {...rest}
          />
          <span className={`slider ${size} round`}></span>
        </label>
      </div>
    </div>
  );
};

export default Switch;
