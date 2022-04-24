import { useState } from "react";
import {api} from "../../services/api.js";
import InputBusca from "../Input/InputBusca.jsx";
import { Botao } from "../Button/ButtonStyled.jsx";

export default function Form (){
    const [prodInfo, setProdInfo] = useState({});
    function onChange(e){
        setProdInfo({...prodInfo, [e.target.name]: e.target.value})
    }
    
    function submit(e){
        e.preventDefault()
        api.get("/id", prodInfo)
    }

    return(
        <form onSubmit={submit}>
            <InputBusca labelName="id:" name="id" id="id" onChange={onChange}/>
            <Botao type="submit">Buscar</Botao>
        </form>
    )
}