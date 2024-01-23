import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Page from "./Page";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={Page} />
          <Route path="/signin" exact Component={SignUp} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
