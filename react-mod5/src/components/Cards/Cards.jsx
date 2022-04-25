import React from "react";
import { Container } from "./CardsSytled.jsx";
import { Link } from "react-router-dom";

export default function Cards({nomeDoItem, id, tipo, quantidade, preco}) {
    return (
        <Link to={`/consulta/${id}`}>
            <Container>
                <div><p>{nomeDoItem}</p> <p>ID: {id}</p></div>
                <p>Tipo: {tipo}</p>
                <div><p>R${preco}</p> <p>Un.: {quantidade}</p></div>
            </Container>
        </Link>

    )
}