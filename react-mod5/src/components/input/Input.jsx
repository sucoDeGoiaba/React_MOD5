import styled from './Input.module.css'

export default function Input ({onChange, labelName, name, id}){
    return(
        <fieldset className={styled.containerInput}>
            <label htmlFor={id}>{labelName}</label>
            <input type="text" name={name} id={id} onChange={onChange} required/>
        </fieldset>
        
    )
}