import './Input.css'
const Input = ({placeholder, value, onChange}) => {

    return (

    <input  

        type="text" 
        placeholder={placeholder}
        onChange={onChange}
    />

    )
}

export default Input