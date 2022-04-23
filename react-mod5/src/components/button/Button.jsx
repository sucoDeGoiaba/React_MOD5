import React from "react";
import styled from "styled-components";
function Button({ click, nome }) {
  const Botao = styled.button`
    background-color: #101010;
    border-radius: 5px;
    color: white;
  `;
  return (
    <div>
      <Botao onClick={click}>{nome}</Botao>
    </div>
  );
}

export default Button;
