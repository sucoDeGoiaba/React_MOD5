import React from "react";
import styled from "styled-components";

function Botao ({click, nome}){
    return (
        <div>
            <Button onClick={click}>{nome}</Button>
        </div>
    )
}