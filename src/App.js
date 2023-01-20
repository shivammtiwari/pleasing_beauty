import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'

import './App.css';
import NavBar from "./Componants/Navbar/Navbar";
// import LocationHeader from "./Componants/LocationHeader/LocationHeader";

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
    </Routes>
  </>
  );
}

export default App;
