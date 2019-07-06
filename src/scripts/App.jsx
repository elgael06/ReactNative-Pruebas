/**
 * @format
 * @flow
 */

import React, { useState } from "react";
import Login from "./components/Login";
const App = () => {
  const [count, setCount] = useState(0);
  const mensaje = () => {
    setCount(0);
    Alert.alert("Reserter counter...");
  };

  return <Login />;
};

export default App;
