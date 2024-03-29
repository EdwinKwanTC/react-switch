"use strict";

import { useRef } from "react";
import "./App.css";
import Switch from "./components/Switch";

function App() {
  const checked = useRef(false);

  const handleChange = (value: boolean) => {
    checked.current = value;
  };

  return (
    <div>
      <Switch size="small" title="switch 1" style={{ color: "grey" }} />
      <Switch
        size="medium"
        title="switch 2"
        checked={checked.current}
        onChange={handleChange}
      />
      <Switch size="large" title="switch 3" checked disabled />
    </div>
  );
}

export default App;
