import React from "react";
import styled from "styled-components";
import { Botao } from "../Button/ButtonStyled.jsx";

function Botao ({click, nome}){
    return (
        <div>
            <Button onClick={click}>{nome}</Button>
        </div>
    )
}

export default Botao;