import "./App.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import React, { useState } from "react";
// import About from "./components/About";
// import Contact from "./components/Contact";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Update import statement

function App() {
  const [mood, setMood] = useState("light");

  const toggleMood = () => {
    if (mood === "light") {
      setMood("dark");
    } else {
      setMood("light");
    }
  };

  return (
    // <Router>
      <div style={{ backgroundColor: mood === "dark" ? "#072757" : "white" }}>
        <Navbar tittle="Textutils" mood={mood} toggleMood={toggleMood} />
        <div className="container mt-5">
        {/* <Routes> Use Routes component */}
     
          {/* <Route exact path="/about" element={<About />} /> */}
          {/* <Route exact path="/Contact" element={<Contact />} /> */}
          {/* <Route exact path="/" element={ */}
          <Textarea mood={mood} />
          {/* }  /> */}
          
        {/* </Routes> */}
        </div>
      </div>
    // {/* </Router> */}
  );
}

export default App;
