import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import ItemPage from "./Pages/ItemPage";
import Fun from "./Pages/Fun";
import About from "./Pages/About";
import Ideas from "./Pages/Ideas";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectTitle" element={<ItemPage />} />
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/ideas/:ideaTitle" element={<ItemPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/fun" element={<Fun />} />
      </Routes>
    </div>
  );
}

export default App;
