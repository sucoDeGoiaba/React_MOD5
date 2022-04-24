import React, {useState, useEffect} from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import api from "../services/Api.js";
import Cards from "./components/Cards/Cards.jsx";

export default function BuscaItens(){
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
        <Container/>
          
    )
}
