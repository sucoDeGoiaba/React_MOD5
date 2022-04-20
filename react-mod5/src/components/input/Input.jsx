export default function Input ({onChange, labelName, name, id}){
    return(
        <>
            <label htmlFor={id}>{labelName}</label>
            <input type="text" name={name} id={id} onChange={onChange} required/>
        </>
        
    )
}