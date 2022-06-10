import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Mainpages from "./components/mainpage/Pages";
import { DataProvider } from "./GlobalState";

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Mainpages />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
