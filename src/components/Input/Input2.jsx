import styled from './Input.module.css'
export default function Input({ onChange, labelName, name, id, value }) {
    return (
        <>
            <label className={styled.label} htmlFor={id}>{labelName}
            <input 
                className={styled.input}
                value={value} 
                type="text" 
                name={name} 
                id={id} 
                onChange={onChange} 
                required 
            />
            </label>
        </>

    )
}