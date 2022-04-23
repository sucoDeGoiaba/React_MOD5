import { useState } from "react";
import { api } from "../services/api";
import { useParams } from "react-router-dom";
import Button from "../components/button/Button";

function DeletaProduto() {
  const { id } = useParams();
  const [produto, setProduto] = useState({});

  // const navigate = useNavigate();

  // useEffect(() => {
  //   api.get("/produtos/" + id).then((response) => {
  //     const dados = response.data;
  //     console.log(dados);
  //     setProduto(dados.produto.produto[0]);
  //   });
  // }, [id]);

  function handleDelete() {
    api.delete("/produto/" + produto.id);
    // navigate("/");
  }

  return (
    <div>
      <Button nome="Deletar produto" click={() => handleDelete()} />
    </div>
  );
}

export default DeletaProduto;
