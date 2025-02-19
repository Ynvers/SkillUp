import './Input.css'
const Input = ({type,placeholder, value, onChange}) => {

    return (

    <input  

        type={type}
        value={value} 
        placeholder={placeholder}
        onChange={onChange}
    />

    )
}

export default Input