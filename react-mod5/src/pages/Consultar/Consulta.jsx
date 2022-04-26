import styled from "../../components/form/Form.module.css";
import Input from "../../components/input/Input2.jsx";

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../services/api.js"

export default function Consultar (){
    const [produto, setProduto] = useState([])
    const {id} = useParams()

    // Pega a info dos Inputs e passa um JSON para prodInfo, contendo nome e valor do Input para futuro envio
    function onChange(e){
        setProduto({...produto, [e.target.name] : e.target.value})
    }

    function handleEdit(){
        api.put(`/produtos/id/${id}`, produto)
    }

    function handleDelete() {
        api.delete(`/id/${id}`);
    }

    useEffect(()=>{
        api.get(`/id/${id}`)
            .then((resp)=>{
                setProduto(resp.data.estoque[0])
            })
    }, [id])

    return(
        <form className={styled.containerForm}>
            <Input 
                value={produto.nomeProd || produto.nome}
                labelName="Nome do Produto:" 
                name="nomeProd" 
                id="nomeProd" 
                onChange={onChange}
            />

            <Input 
                value={produto.tipo}
                labelName="Tipo:" 
                name="tipo" 
                id="tipo" 
                onChange={onChange}
            />

            <div className={styled.diagramacao}>
                <Input 
                    value={produto.quantidade}
                    labelName="Quantidade:" 
                    name="quantidade" 
                    id="quantidade" 
                    onChange={onChange}
                />
                <Input 
                    value={produto.preco}
                    labelName="Preço:" 
                    name="preco" 
                    id="preco" 
                    onChange={onChange}
                />
            </div>

            <fieldset>
                <button type="submit" onClick={handleEdit}>Editar</button>
                <button type="submit" onClick={handleDelete}>Deletar</button>
            </fieldset>
        </form>
    )
}