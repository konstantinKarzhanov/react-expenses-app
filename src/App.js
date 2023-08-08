import React from "react";
import { ContextProvider } from "./context/Context";
import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <ContextProvider>
      <Button />
    </ContextProvider>
  );
}

export default App;
