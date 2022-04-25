// <<<<<<< HEAD
import AddProd from "./pages/addProduto/AddProd";

function App() {
  return (
   <AddProd/>
  )
}
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header.jsx";
// import Footer from "./components/Footer/Footer.jsx";
import BuscaItens from "./pages/BuscaItens/TodosItens.jsx";
import MostraProduto from "./pages/BuscaItens/TodosItens.jsx";
import Consulta from "./pages/Consultar/Consulta.jsx";



function App() {
  return (

    <div>
      <Router>
        {/* <Header /> */}
        <MostraProduto />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} /> */}
          <Route path="/consulta/:id" element={<Consulta />} />
          {/* <Route path="*" element={<PaginaDeErro />} /> */}
        </Routes>
      </Router>
    </div>

>>>>>>> eca559734ec301d7e0c44af198557e68c53354bd

  );
}

export default App;
