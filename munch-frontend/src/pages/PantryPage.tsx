
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
             <button className="remove-btn" onClick={() => removeIngredient(index)}>
               <svg width="25px" height="25px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <rect x="0" fill="none" width="20" height="20"/>
               <g>
                <path d="M14.95 6.46L11.41 10l3.54 3.54-1.41 1.41L10 11.42l-3.53 3.53-1.42-1.42L8.58 10 5.05 6.47l1.42-1.42L10 8.58l3.54-3.53z"/>
                </g>
                </svg>
              </button>
           </div>
         ))}
         
       </div> 
    </section>
  );
}

export default PantryPage;