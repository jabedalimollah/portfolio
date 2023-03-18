import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./Layout/Header/Header";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import ErrorPage from "./Pages/Error/ErrorPage";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import UnderConstruction from "./Pages/UnderConstruction/UnderConstruction";

function App() {
  useEffect(() => {
    const handleContextmenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/project" element={<Projects />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>

          <Route path="*" element={<ErrorPage />}></Route>
          <Route
            path="/contact/underConstruction"
            element={<UnderConstruction />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
