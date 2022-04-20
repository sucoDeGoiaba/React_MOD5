export default function Input ({onChange, labelName, name, id}){
    return(
        <label htmlFor={id}>{labelName}
            <input type="text" name={name} id={id} onChange={onChange}/>
        </label>
    )
}