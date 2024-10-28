import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HeadBar from "./components/layout/HeadBar";
import HeaderTitle from "./components/layout/HeaderTitle";
import Home from "./pages/home";
import Products from "./pages/products";
import Services from "./pages/services";
import About from "./pages/about";
import Media from "./pages/media";
import Career from "./pages/career";
import Contact from "./pages/contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderTitle />
        <HeadBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/media" element={<Media />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
