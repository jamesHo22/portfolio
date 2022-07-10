import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/ideas" element={<Projects />} />
        <Route path="/about" element={<Projects />} />
        <Route path="/fun" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
