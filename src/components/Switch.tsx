"use strict";

import { useState } from "react";
import "./switch.css";

type Props = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  title?: string;
  style?: React.CSSProperties;
  size?: "small" | "medium" | "large";
};

const Switch = ({
  checked,
  onChange,
  disabled,
  title,
  style,
  size = "medium",
}: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked || false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    setIsChecked(value);
    onChange && onChange(value);
  };

  return (
    <div style={style}>
      <div className={`title ${size}`}>{title}</div>
      <div className={`switch ${size}`}>
        <label>
          <input
            disabled={disabled}
            checked={isChecked}
            onChange={handleChange}
            type="checkbox"
          />
          <span className={`slider ${size} round`}></span>
        </label>
      </div>
    </div>
  );
};

export default Switch;
