import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/about";
import Home from "./pages/home";
import Outlets from "./pages/outlets";
import Products from "./pages/products";
import Recipes from "./pages/recipes";
import Contact from "./pages/contact";
import { Route, Routes } from "react-router-dom";
import "./assets/css/main.scss";
import Footer from "./components/Footer";
import Layout from "./layouts/Layout";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/outlets" element={<Outlets />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
