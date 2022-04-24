export default function Input ({onChange, labelName, name, id, value}){
    return(
        <>
            <label htmlFor={id}>{labelName}</label>
            <input value={value} type="text" name={name} id={id} onChange={onChange} required/>
        </>
        
    )
}