import { useState } from "react"
import { api } from "../../services/api.js"
import Input from "../Input/Input2.jsx"
// import Button from "../Button/button2.jsx"
import styled from "./Form.module.css"

export default function Form (){
    const [prodInfo, setProdInfo] = useState({})

    // Pega a info dos Inputs e passa um JSON para prodInfo, contendo nome e valor do Input para futuro envio
    function onChange(e){
        setProdInfo({...prodInfo, [e.target.name] : e.target.value})
    }

    // Envia as informações do produto para API
    function submit(e){
        e.preventDefault()
        api.post("/addProd", prodInfo)
    }

    return(
    <>
    
        <h1 className={styled.titulo}>Adicione um produto:</h1>
        <form onSubmit={submit} className={styled.containerForm}>
            <Input 
                labelName="Nome do Produto:" 
                name="nomeProd" 
                id="nomeProd" 
                onChange={onChange}
            />

            <Input 
                
                labelName="Tipo:" 
                name="tipo" 
                id="tipo" 
                onChange={onChange}
            />

            <div className={styled.diagramacao}>
                <Input 

                    labelName="Quantidade:" 
                    name="quantidade" 
                    id="quantidade" 
                    onChange={onChange}
                />
                <Input 

                    labelName="Preço:" 
                    name="preco" 
                    id="preco" 
                    onChange={onChange}
                />
            </div>

            <button className={styled.btn} type="submit">ADICIONAR</button>
            {/* <Button/> */}
        </form>
    </>
    )
}