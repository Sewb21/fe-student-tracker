import React from "react";
import "./App.css";
import Header from "./Components/Header";
import StudentList from "./Components/StudentList";
import NavBar from "./Components/NavBar";
import { Router } from "@reach/router";
import Homepage from "./Components/Homepage";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Router>
        <Homepage path="/" />
        <StudentList path="/students" />
      </Router>
    </div>
  );
}

export default App;
