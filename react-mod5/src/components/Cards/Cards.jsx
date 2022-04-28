import React, { useEffect, useState } from "react";
import { Container } from "./CardsSytled.jsx";
import { Link } from "react-router-dom";

import styled from "./Card.module.css";

export default function Cards({
  nomeDoItem,
  id,
  tipo,
  quantidade,
  preco,
  isLoading,
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    isLoading(loading);
  });
  return (
    <Link className={styled.tirandoUnderline} to={`/consulta/${id}`}>
      <Container isLoading={(value) => setLoading(value)}>
        <div className={styled.diagramacao}>
          <p>{nomeDoItem}</p> <p>ID: {id}</p>
        </div>
        <p>Tipo: {tipo}</p>
        <div className={styled.diagramacao}>
          <p>R${preco}</p> <p>Un.: {quantidade}</p>
        </div>
      </Container>
    </Link>
  );
}
