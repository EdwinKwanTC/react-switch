"use strict";

import { useState } from "react";
import "./App.css";
import Switch from "./components/Switch";

function App() {
  const [checked, setChecked] = useState<boolean>(true);

  const handleChange = (value: boolean) => {
    setChecked(value);
  };

  return (
    <div>
      <Switch size="small" title="switch 1" />
      <Switch
        size="medium"
        title="switch 2"
        checked={checked}
        onChange={handleChange}
      />
      <Switch size="large" title="switch 3" checked disabled />
      <Switch
        size="large"
        title="switch 4"
        disabled
        style={{ color: "grey" }}
      />
    </div>
  );
}

export default App;
