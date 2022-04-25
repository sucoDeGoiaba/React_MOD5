import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api.js";
import Form from "../../components/Forms/FormConsulta.jsx";

export default function Consulta() {
    const [produto, setProduto] = useState([]);
    const { id } = useParams();
    console.log(id);

    // useEffect(() => {
    //     api.get("/id/" + id)
    //         .then((response) => {
    //             setProduto(response.data.estoque);
    //         })
    //         .catch((erro) => console.log(erro))
    // }, []);

    return <Form />
}