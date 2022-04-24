import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import api from "../services/Api.js";
import Cards from "./components/Cards/Cards.jsx";
import InputBusca from "../../components/Input/InputBusca.jsx";

function MostraProduto(){
    const {id} = useParams()
    const [produto, setProduto] = useState({});
    function handleGet(){
        api.get("/produto");
    }
    return(
        <div>
            <div>
                return(
                   <div>
                        <label htmlFor={id}>{labelName}</label>
                        <input type="text" name={name} id={id} onChange={onChange} required />
                   </div> 
                )
            </div>
            <div style = {{display: "grid"}}>
                {values.map((produto)=>{
                        return(
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
        
    </div>
    )
}

// function TodosItens(){
//     const [values, setValues] = useState([]);
//     useEffect(()=>{
//         api.get("/protudos")
//         .then((response)=>{
//             setValues(response.data.estoque);
//             console.log("values",values);
//         })
//         .catch((erro)=> console.log(erro));
//     });

//     return(
//     <div>
//         <div>
//             {/* lupa */}
//         </div>
//         <div style = {{display: "grid"}}>
//             {values.map((produto)=>{
//                 return(
//                     <Cards
//                     NomeDoItem={produto.nomeProd}
//                     ID={produto.id}
//                     Tipo={produto.tipo}
//                     Quantidade={produto.quantidade}
//                     Preço={produto.preco}
//                     />
//                 );
//             })}
//         </div>

//         <div>
//             {/* lateral */}
//         </div>

//     </div>

//     )

// }

// export default TodosItens;


// // export default function BuscaItens(){
// //     const [produto, setProduto]  = useState([]);
// //     const navigate = useNavigate();
// //     const {id} = useParams();
    
// //     useEffect(()=>{
// //         Api.get(`/produto`)
// //         .then((response)=>{
// //             setProduto(response.data.estoque[0]);
// //         })
// //         .catch((erro)=> console.log(erro))
// //     }, []);

// //     return(
// //         <Container>
// //             <div>

// //             </div>

// //         </Container>
// //     )
// // }
