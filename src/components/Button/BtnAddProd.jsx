import { useNavigate } from 'react-router';

import styled from './BtnAddProd.module.css'
export default function BtnAddProd(){
    const navigate = useNavigate()
    return <button className={styled.btn} onClick={() => navigate('/adicionar')}>ADICIONAR PRODUTO</button>
}