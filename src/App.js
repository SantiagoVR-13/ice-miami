import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Componentes/Header/Header";
import Home from "./Componentes/Home/Home";
import ContactPage from "./Pages/ContactPage/ContactPage";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import BlogPage from "./Pages/BlogPage/BlogPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/services" element={<ServicesPage />}></Route>
          <Route path="/blog" element={<BlogPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
