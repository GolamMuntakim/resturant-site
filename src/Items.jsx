import React, { useEffect, useState } from 'react';
import Item from './Item';

const Items = ({handleWantToCook,handleDelete}) => {
    const [recipes,setRecipes] = useState([])
    useEffect(()=>{
        fetch('items.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    })
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
           {
            recipes.map(recipe=><Item key={recipe.id} recipe={recipe} handleWantToCook={handleWantToCook} handleDelete={handleDelete}></Item>)
           }
        </div>
    );
};

export default Items;