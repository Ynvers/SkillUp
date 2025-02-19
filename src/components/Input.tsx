import './Input.css'
const Input = ({placeholder, value, onChange}) => {

    return (

    <input  

        type="text"
        value={value} 
        placeholder={placeholder}
        onChange={onChange}
    />

    )
}

export default Input