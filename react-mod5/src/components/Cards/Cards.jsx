import React from "react";
import {Container} from "./CardsStyled.jsx";

export default function Cards({NomeDoItem, ID, Tipo, Quantidade, Preço}){
    return(
        <Container>
            <p>{NomeDoItem}</p>
            <p>{ID}</p>
            <p>{Tipo}</p>
            <p>{Quantidade}</p>
            <p>{Preço}</p>

        </Container>

    )
}