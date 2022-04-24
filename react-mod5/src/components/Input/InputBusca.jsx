import React from "react";
import { InputBusca } from "./InputBuscaStyled.jsx";

export default function InputBusca({onChange, labelName, name, id}){
    return(
        <>
            <label htmlFor={id}>{labelName}</label>
            <input type="text" name={name} id={id} onChange={onChange} required />
        </>
    )
}

// function InputBuscaId({id, onSubmit, type, value}) {
//     const [produto, setProduto]  = useState([]);
//     const navigate = useNavigate();
//     const {id} = useParams();
    
//     useEffect(()=>{
//         api.get(`/id/{id}`)
//         .then((response)=>{
//             setProduto(response.data.estoque[0]);
//         })
//         .catch((erro)=> console.log(erro))
//     }, []);
   
//     return(
//         <ContainerBusca>
//             <InputBusca/>
//         </ContainerBusca>
//     );
// };

// export default InputBuscaId;