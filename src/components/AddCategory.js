import React, { useState } from 'react'
import PropTypes from 'prop-types'

 const AddCategory = ({setCategories}) => {
     

    const [inputValue, setInputValue] = useState('Hola Mundo');//Si queremos que el campo esté vacio mandar -> ''

    //el parametro e.target.value Recupera el valor de cualquier entrada a la que se solicitó
    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
    }
    
    const handleSubmit = (e)=>{
        //e.preventDefault(); Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.
        e.preventDefault();
        
        //el metodo .trim() elimina los espacion en blanco en ambos extremos del string
        if (inputValue.trim().length>2) {
            
            setCategories(cats=>[...cats, inputValue ]);
            setInputValue('');//se pone apostrofes vacios para que al hacer enter se quede vacío
        }else{
            alert('El campo no puede estar vacio');
        }
        
    }

    return (
            <form onSubmit={handleSubmit}>
                <h1>{inputValue}</h1>
                <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                />
            </form>
    )
}






export default AddCategory


AddCategory.propTypes = {
    //La siguiente línea indica que el argumento recibido forzosamente debe ser una funcion
    setCategories: PropTypes.func.isRequired
}
