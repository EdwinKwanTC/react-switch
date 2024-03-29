"use strict";

import { useState } from "react";
import "./switch.css";

type Props = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
};

const Switch = ({ checked, onChange, disabled, style, ...rest }: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked || false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    setIsChecked(value);
    onChange && onChange(value);
  };

  return (
    <div className="switch">
      <label>
        <input
          disabled={disabled}
          checked={isChecked}
          onChange={handleChange}
          type="checkbox"
          {...rest}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Switch;
