import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Componentes/Header/Header";
import Home from "./Componentes/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
