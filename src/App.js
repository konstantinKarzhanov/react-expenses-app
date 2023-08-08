import React from "react";
import { ContextProvider } from "./context/Context";
import Test from "./components/Test";
import "./App.css";

function App() {
  return (
    <ContextProvider>
      <Test />
    </ContextProvider>
  );
}

export default App;
