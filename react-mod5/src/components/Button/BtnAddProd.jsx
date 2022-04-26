import { useNavigate } from 'react-router';
export default function BtnAddProd(){
    const navigate = useNavigate()
    return <button onClick={() => navigate('/adicionar')}>Adicionar produto</button>
}