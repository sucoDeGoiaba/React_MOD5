import { useState } from "react";
import {api} from "../../services/api.js";
import InputBusca from "../Input/InputBusca.jsx";

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
            <button type="submit">Buscar</button>
        </form>
    )
}