// CSS
import "./App.css";

// REACT
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// PAGES
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

// COMPONENTS
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">
      <h1>MiniBlog</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
