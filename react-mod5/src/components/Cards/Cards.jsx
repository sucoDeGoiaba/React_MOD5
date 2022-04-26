import React from "react";
import { Container } from "./CardsSytled.jsx";
import { Link } from "react-router-dom";

import styled from "./Card.module.css"

export default function Cards({nomeDoItem, id, tipo, quantidade, preco}) {
    return (
        <Link className={styled.tirandoUnderline} to={`/consulta/${id}`}>
            <Container>
                <div className={styled.diagramacao}><p>{ nomeDoItem }</p> <p>ID: {id}</p></div>
                <p>Tipo: {tipo}</p>
                <div className={styled.diagramacao}><p>R${preco}</p> <p>Un.: {quantidade}</p></div>
            </Container>
        </Link>

    )
}