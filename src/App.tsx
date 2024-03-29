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
    <>
      <Switch checked={checked} onChange={handleChange} />
      <Switch checked disabled />
    </>
  );
}

export default App;
