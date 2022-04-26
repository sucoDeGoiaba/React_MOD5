import { useState } from "react";
import { api } from "../services/api";
import { useParams } from "react-router-dom";
import Buttone from "../components/button/Buttone";
import { useEffect } from "react";

function EditaProduto() {
  const { id } = useParams();
  const [produto, setProduto] = useState({});
  

  function handleEdit() {
    api.put("/produtos/" + id);
    // navigate("/");
  }

  return (
    <div>
      <Buttone nome="Editar produto" click={() => handleEdit()} />
    </div>
  );
}

export default EditaProduto;