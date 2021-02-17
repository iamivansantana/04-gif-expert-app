//Comando (stipet) para crear toda la estructura de un componente con propTypes => "rafcp"
import React,{useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
// import PropTypes from 'prop-types';

const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(['Dragon ball'])

     
    // const handleAdd =()=>{
    //     setCategories([...categories,'nuevo']);
    //     setCategories(cats=>[...cats,'nuevo']);
    // }
     
    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}  />
            <hr/>
            {
                categories.map(category => <GifGrid key={category} category={category}/>)
            }
        </>
    );

}

export default GifExpertApp;