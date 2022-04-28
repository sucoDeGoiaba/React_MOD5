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
        console.log("produto", produto);
      })
      .catch((erro) => console.log(erro));
  });

  return (
    <ul className={styled.lista}>
      {produto.map((produto) => {
        return (
          <div>
            {loading && (
              <>
                <MyLoader />
                <MyLoader />
                <MyLoader />
                <MyLoader />
              </>
            )}
            <Cards
              key={produto.id}
              nomeDoItem={produto.nome}
              id={produto.id}
              tipo={produto.tipo}
              quantidade={produto.quantidade}
              preco={produto.preco}
              isLoading={(value) => setLoading(value)}
            />
          </div>
        );
      })}
    </ul>
  );
}
