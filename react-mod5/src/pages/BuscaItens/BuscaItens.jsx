import {useState, useEffect} from "react";
import api from "../services/Api.js";
import Cards from "./components/Cards/Cards.jsx";

function BuscaItens(){
    const [values, setValues] = useState([]);
    useEffect(()=>{
        api.get("/protudos")
        .then((response)=>{
            setValues(response.data.estoque);
            console.log("values",values);
        })
        .catch((erro)=> console.log(erro));
    });

    return(
    <div>
        <div>
            {/* lupa */}
        </div>
        <div style = {{display: "grid"}}>
            {values.map((produto)=>{
                return(
                    <Cards
                    Nome do Item={produto.nomeProd}
                    ID={produto.id}
                    Tipo={produto.tipo}
                    Quantidade={produto.quantidade}
                    Preço={produto.preco}
                    />
                );
            })}
        </div>

        <div>
            {/* lateral */}
        </div>

    </div>

    )

}

export default BuscaItens;


// export default function BuscaItens(){
//     const [produto, setProduto]  = useState([]);
//     const navigate = useNavigate();
//     const {id} = useParams();
    
//     useEffect(()=>{
//         Api.get(`/produto`)
//         .then((response)=>{
//             setProduto(response.data.estoque[0]);
//         })
//         .catch((erro)=> console.log(erro))
//     }, []);

//     return(
//         <Container>
//             <div>

//             </div>

//         </Container>
//     )
// }
