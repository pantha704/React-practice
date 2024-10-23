import React from "react";
import { AppProvider } from "./context";
import Home from "./components/Home"; // Example component using context
import "./App.css";

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
