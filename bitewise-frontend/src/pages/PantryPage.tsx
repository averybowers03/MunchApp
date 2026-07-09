
import './PantryPage.css';
import { useContext } from 'react';
import { PantryContext } from '../context/PantryContext';

function PantryPage() {

  const { ingredients, setIngredients, ingredientList, addIngredient, removeIngredient } = useContext(PantryContext);

  return (
    <section className="screen" id="pantry">   
       
       <div className="pantry-header">
        <h2>My Pantry</h2>
        <span>0 items available</span>
       </div>

       <div className="pantry-search">

        <form className="search-form">
          <input value={ingredients.ingredient} onChange={(e) => setIngredients({ ...ingredients, ingredient: e.target.value })} type="text" className="ingredient-input" placeholder="Enter ingredient..." />
          <input value={ingredients.qty} onChange={(e) => setIngredients({ ...ingredients, qty: e.target.value })} type="text" className="qty-input" placeholder="Qty" />

          <select className="unit-select" value={ingredients.unit} onChange={(e) => setIngredients({ ...ingredients, unit: e.target.value })}>
            <option value="">Unit</option>
            <option value="cups">Cups</option>
            <option value="tablespoons">Tbsp</option>
            <option value="teaspoons">Tsp</option>
          </select>

          <button type="button" className="add-btn" onClick={addIngredient}>Add</button>
        </form>
        </div>

       <div className="pantry-list">

         {ingredientList.map((item, index) => (
           <div className="pantry-item" key={index}>
             <span>{item.ingredient} - {item.qty} {item.unit}</span>
             <button className="remove-btn" onClick={() => removeIngredient(index)}>
               Remove
             </button>
           </div>
         ))}


       </div> 
    </section>
  );
}

export default PantryPage;