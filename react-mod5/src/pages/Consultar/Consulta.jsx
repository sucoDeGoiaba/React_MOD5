import styledForm from "../../components/form/Form.module.css";
import styledBtn from "./Consulta.module.css"
import Input from "../../components/Input/Input2.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../services/api.js"

export default function Consultar (){
    const [produto, setProduto] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()
    // Pega a info dos Inputs e passa um JSON para prodInfo, contendo nome e valor do Input para futuro envio
    function onChange(e){
        setProduto({...produto, [e.target.name] : e.target.value})
    }

    function handleEdit(e){
        e.preventDefault()
        api.put(`/produtos/id/${id}`, produto)
    }

    function handleDelete() {
        api.delete(`/id/${id}`);
        navigate('/')
        
    }

    useEffect(()=>{
        api.get(`/id/${id}`)
            .then((resp)=>{
                setProduto(resp.data.estoque[0])
            })
    }, [id])

    return(
        <form className={styledForm.containerForm}>
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

            <div className={styledForm.diagramacao}>
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

            <fieldset className={styledBtn.fieldset}>
                <button className={styledBtn.btnEditar} type="submit" onClick={handleEdit}>Editar</button>
                <button className={styledBtn.btnExcluir} type="submit" onClick={handleDelete}>Deletar</button>
            </fieldset>
        </form>
    )
}