import React from "react";
import { InputBuscaStyled } from "./InputBuscaStyled.jsx";

export default function InputBusca({ onChange, labelName, name, id }) {
    return (
        <>
            <label htmlFor={id}>{labelName}</label>
            <input type="text" name={name} id={id} onChange={onChange} required />
        </>
    )
}