import React from "react";
import styled from "styled-components";
import { Botao } from "./ButtonStyled.jsx";

function BtnFeliz ({click, nome}){
    return (
        <div>
            <Botao onClick={click}>{nome}</Botao>
        </div>
    )
}

export default Botao;