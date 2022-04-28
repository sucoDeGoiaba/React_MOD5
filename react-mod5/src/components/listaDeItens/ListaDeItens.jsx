import { useState, useEffect } from "react";
import { api } from "../../services/api.js";
import Cards from "../Cards/Cards.jsx";
import MyLoader from "../Loader/Loader.jsx";

import styled from "./ListaDeItens.module.css";

export default function MostraProduto() {
  const [produto, setProduto] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/produtos")
      .then((response) => {
        setProduto(response.data.estoque);
        setLoading(false);
      })
      .catch((erro) => console.log(erro));
  }, [produto]);
  if (loading) {
    return (
      <>
        <MyLoader />
        <MyLoader />
        <MyLoader />
        <MyLoader />
      </>
    );
  } else {
    return (
      <ul className={styled.lista}>
        {produto.map((produto) => {
          return (
            <div key={produto.id}>
              <Cards
                nomeDoItem={produto.nome}
                id={produto.id}
                tipo={produto.tipo}
                quantidade={produto.quantidade}
                preco={produto.preco}
                //   isLoading={(value) => setLoading(value)}
                //   setLoad={true}
              />
            </div>
          );
        })}
      </ul>
    );
  }
}
