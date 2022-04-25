import { useEffect, useState } from "react";
import { api } from "../../services/Api.js";
import Input from "../input/Input.jsx";
import { Botao } from "../button/ButtonStyled.jsx";
import { useParams } from "react-router-dom";
export default function Form() {
    const [prodInfo, setProdInfo] = useState({})

    // Pega a info dos Inputs e passa um JSON para prodInfo, contendo nome e valor do Input para futuro envio
    function onChange(e) {
        setProdInfo({ ...prodInfo, [e.target.name]: e.target.value })
    }


    const { id } = useParams();
    useEffect(() => {
        api.get("/id/" + id)
            .then((response) => {
                setProdInfo(response.data.estoque);
            })
            .catch((erro) => console.log(erro))
    }, []);

    return (
        <form >
            <Input value={prodInfo.nomeProd} labelName="Nome do Produto:" name="nomeProd" id="nomeProd" onChange={onChange} />
            <Input value={prodInfo.quantidade} labelName="Quantidade:" name="quantidade" id="quantidade" onChange={onChange} />
            <Input value={prodInfo.preco} labelName="Preço:" name="preco" id="preco" onChange={onChange} />
            <Input value={prodInfo.tipo} labelName="Tipo:" name="tipo" id="tipo" onChange={onChange} />
            <Botao type="submit">Buscar</Botao>
        </form>
    )
}
