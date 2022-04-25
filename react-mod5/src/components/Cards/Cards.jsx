import React from "react";
import { Container } from "./CardsSytled.jsx";
import { Link } from "react-router-dom";

export default function Cards({ NomeDoItem, ID, Tipo, Quantidade, Preço }) {
    return (
        <Link to={"/consulta/" +ID}>

            <Container>
                <p>{NomeDoItem}</p>
                <p>{ID}</p>
                <p>{Tipo}</p>
                <p>{Quantidade}</p>
                <p>{Preço}</p>

            </Container>
        </Link>

    )
}