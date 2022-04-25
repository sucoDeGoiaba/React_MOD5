import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Consulta from "./pages/Consultar/Consulta.jsx";
import MostraProduto from "./components/listaDeItens/ListaDeItens.jsx";
import AddProd from "./pages/addProduto/AddProd.jsx";

function App() {
  return (
    <>
      {/* Header */}
      <Router>
        <section>
          {/* https://www.w3schools.com/css/css_overflow.asp */}
          {/* https://www.codedaily.io/tutorials/Build-a-Reusable-Scroll-List-Component-with-Animated-scrollTo-in-React */}
          <MostraProduto/>
        </section>
        <Routes>
          <Route path="/"/>
          <Route path="/adicionar" element={<main> <AddProd/> </main>}/>
          <Route path="/consulta/:id" element={<main> <Consulta/> </main>} />
        </Routes>
      </Router>
      {/* Footer */}
    </>
  )
}

export default App;