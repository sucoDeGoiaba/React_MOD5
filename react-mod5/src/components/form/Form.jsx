import { useState } from "react"
import Input from "../input/Input"

export default function Form (){
    const [prodInfo, setProdInfo] = useState({})
    // Pega a info dos Inputs e passa um JSON para prodInfo, contendo nome e valor do Input
    function onChange(e){
        setProdInfo({...prodInfo, [e.target.name] : e.target.value})
    }
    return(
        <form action="">
            <Input labelName="Nome do Produto:" name="nomeProd" id="nomeProd" onChange={onChange}/>
            <Input labelName="Quantidade:" name="quantidade" id="quantidade" onChange={onChange}/>
            <Input labelName="Preço:" name="preco" id="preco" onChange={onChange}/>
            <Input labelName="Tipo:" name="tipo" id="tipo" onChange={onChange}/>
        </form>
    )
}