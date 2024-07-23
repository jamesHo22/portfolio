import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import ItemPage from "./Pages/ItemPage";
import Fun from "./Pages/Fun";
import About from "./Pages/About";
import Ideas from "./Pages/Ideas";
import SignIn from "./Pages/SignIn";
import { useState } from "react";
import NewArticle from "./Pages/NewArticle";
import Reading from "./Pages/Reading";
import Articles from "./Pages/Articles";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Projects />} />
        <Route path="/experience/:projectTitle" element={<ItemPage />} />
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/ideas/:ideaTitle" element={<ItemPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/fun" element={<Fun />} />
        <Route path="/new-article" element={<NewArticle />} />
        <Route path="/resume" />
        <Route path="/reading" element={<Reading />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/Articles/:articleName" element={<ItemPage />} />
      </Routes>
    </div>
  );
}

export default App;
