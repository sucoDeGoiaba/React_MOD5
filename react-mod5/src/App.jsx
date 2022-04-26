import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Consulta from "./pages/Consultar/Consulta.jsx";
import MostraProduto from "./components/listaDeItens/ListaDeItens.jsx";
import AddProd from "./pages/addProduto/AddProd.jsx";
import BtnAddProd from "./components/Button/BtnAddProd.jsx";
import Header from "./components/Layout/Header/Header.jsx";
import Footer from "./components/Layout/Footer/Footer.jsx";

import styled from "./App.module.css"
function App() {
  return (
    <>
      <Header/>
      <main className={styled.main}>      
      <Router>
        <section className={styled.listagemItens}>
          {/* https://www.w3schools.com/css/css_overflow.asp */}
          {/* https://www.codedaily.io/tutorials/Build-a-Reusable-Scroll-List-Component-with-Animated-scrollTo-in-React */}
          <MostraProduto/>
          <BtnAddProd/>
        </section>
        <Routes>
          <Route path="/"/>
          <Route path="/adicionar" element={<section> <AddProd/> </section>}/>
          <Route path="/consulta/:id" element={<section> <Consulta/> </section>} />
        </Routes>
      </Router>
     
      </main>
      <Footer/>
    </>
  )
}

export default App;