
import './PantryPage.css';
import IngredientSearch  from '../components/IngredientSearch';
import { useContext } from 'react';
import { PantryContext } from '../context/PantryContext';

function PantryPage() {
  
  const { ingredientList, removeIngredient } = useContext(PantryContext);

  return (
    <section className="screen" id="pantry">   
       
       <div className="pantry-header">
        <h2>My Pantry</h2>
        <span>{ingredientList.length} items available</span>
       </div>

       <IngredientSearch />

       <div className="pantry-list">

         {ingredientList.map((item, index) => (
           <div className="pantry-item" key={index}>
             <span>{item.ingredient} - {item.qty} {item.unit}</span>
             <button className="remove-btn" onClick={() => removeIngredient(index)}>x</button>
           </div>
         ))}
         
       </div> 
    </section>
  );
}

export default PantryPage;