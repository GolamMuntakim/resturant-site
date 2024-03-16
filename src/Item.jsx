import { CiClock1 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
const Item = ({recipe,handleWantToCook}) => {

    return (
        <div>
       <div className="card w-72 lg:w-96 bg-base-100 shadow-xl">
  <figure><img className="pt-4" src={recipe.recipe_image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{recipe.recipe_name}</h2>
    <h2>{recipe.short_description}</h2>
    <hr />
   
    
      <div ><p className="font-bold">Ingredients: {recipe.ingredients.length}</p>
      {
        recipe.ingredients.map((ingi)=><li >{ingi}</li>)
      }
      </div>
    
    <hr />
    <div className="flex justify-between">
    <div className="flex gap-2 items-center"><CiClock1 />  {recipe.preparing_time} minutes</div> 
    <div className="flex gap-2 items-center"><FaFire /> {recipe.calories} Calories</div>  
    </div>
    <div className="card-actions justify-start">
      <button onClick={()=>handleWantToCook(recipe)} className="btn btn-success rounded-full">Want to Cook</button>
    </div>
  </div>
</div>
       
        </div>
    );
};

export default Item;