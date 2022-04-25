import { useState, useEffect } from "react";
import { api } from "../../services/Api.js";
import Cards from "../../components/Cards/Cards.jsx";
import InputBusca from "../../components/input/InputBusca.jsx";

export default function MostraProduto() {
    const [produto, setProduto] = useState([]);

    useEffect(() => {
        api.get("/produtos")
            .then((response) => {
                setProduto(response.data.estoque);
                console.log("produto", produto);
            })
            .catch((erro) => console.log(erro));
    });

    return (
        <div>
            {/* <div>
                <InputBusca />
            </div> */}
            {produto.map((produto) => {
                return (
                    <Cards
                        NomeDoItem={produto.nomeProd}
                        ID={produto.id}
                        Tipo={produto.tipo}
                        Quantidade={produto.quantidade}
                        Preço={produto.preco}
                    />
                );
            })}
        </div>
    )
}
