import { useState } from "react";
import { api } from "../../services/api.js";
import Input from "../input/Input.jsx";
import DeletaProduto from "../pages/DeletaProduto.jsx";

export default function Form() {
  const [prodInfo, setProdInfo] = useState({});

  // Pega a info dos Inputs e passa um JSON para prodInfo, contendo nome e valor do Input para futuro envio
  function onChange(e) {
    setProdInfo({ ...prodInfo, [e.target.name]: e.target.value });
  }

  // Envia as informações do produto para API
  function submit(e) {
    e.preventDefault();
    api.post("/addProd", prodInfo);
  }

  return (
    <form onSubmit={submit}>
      <Input
        labelName="Nome do Produto:"
        name="nomeProd"
        id="nomeProd"
        onChange={onChange}
      />
      <Input
        labelName="Quantidade:"
        name="quantidade"
        id="quantidade"
        onChange={onChange}
      />
      <Input labelName="Preço:" name="preco" id="preco" onChange={onChange} />
      <Input labelName="Tipo:" name="tipo" id="tipo" onChange={onChange} />
      <button type="submit">Adicionar</button>
      <DeletaProduto />
    </form>
  );
}
