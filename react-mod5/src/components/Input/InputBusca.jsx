import React from "react";
import { ContainerBusca, InputBusca } from "./InputBuscaStyled.jsx";


function InputBuscaId({id, onSubmit, type, value}) {
    const [produto, setProduto]  = useState([]);
    const navigate = useNavigate();
    const {id} = useParams();
    
    useEffect(()=>{
        api.get(`/id/{id}`)
        .then((response)=>{
            setProduto(response.data.estoque[0]);
        })
        .catch((erro)=> console.log(erro))
    }, []);
   
    return(
        <ContainerBusca>
            <InputBusca/>
        </ContainerBusca>
    );
};

export default InputBuscaId;