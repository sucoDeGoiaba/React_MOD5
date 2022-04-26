import { useState } from "react"
import { api } from "../../services/api.js"
import Input from "../input/Input.jsx"
import EditaProduto from "../../pages/EditaProduto.jsx"
import { useEffect } from "react"

export default function Form (){
    const [prodInfo, setProdInfo] = useState({})
    const [produto, setProduto] = useState({})


    
    function onChange(e){
        setProdInfo({...prodInfo, [e.target.name] : e.target.value})
    }

    function submit(e){
        e.preventDefault()
        api.post("/addProd", prodInfo)
    }

    useEffect (()=> {
        api.get("/produtos")
        .then ((resposta)=>{
            setProduto(resposta.data.estoque)
            console.log(produto);
        })
    }
     )
    
    return(
        <form onSubmit={submit}>
            <Input value={produto[0].nome} labelName="Nome do Produto:" name="nomeProd" id="nomeProd" onChange={onChange}/>
            <Input value={produto[0].quantidade}labelName="Quantidade:" name="quantidade" id="quantidade" onChange={onChange}/>
            <Input value={produto[0].preco}labelName="Preço:" name="preco" id="preco" onChange={onChange}/>
            <Input value={produto[0].tipo}labelName="Tipo:" name="tipo" id="tipo" onChange={onChange}/>
            {/* <sbutton type="ubmit">Editar</button> */}
      <EditaProduto />
        </form>
    )
}