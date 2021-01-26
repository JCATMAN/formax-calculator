import React, { useState } from "react";
import { SnackbarProvider } from "notistack";
import Layout from "./HOC/Layout/Layout";
import ResultContext from "./context/ResultContext";

function App() {
  const [result, setResult] = useState("");
  const onSetResult = (val) => setResult(val);

  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>
        <ResultContext.Provider value={{ result, onSetResult }}>
          <Layout />
        </ResultContext.Provider>
      </SnackbarProvider>
    </div>
  );
}

export default App;
