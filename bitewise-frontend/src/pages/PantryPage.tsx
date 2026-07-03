
import './PantryPage.css';
import { useState } from 'react';

function PantryPage() {

  const [ingredients, setIngredients] = useState({

    ingredient= '',
    qty= '',
    unit= ''
  });
  
  
  return (
    <section className="screen" id="pantry">   
       
       <div className="pantry-header">
        <h2>My Pantry</h2>
        <span>0 items available</span>
       </div>

       <div className="pantry-search">
        <input type="text" className="ingredient-input" placeholder="Enter ingredient..." />
        <input type="text" className="qty-input" placeholder="Qty" />
        <input type="text" className="unit-input" placeholder="Unit" />
        <button className="add-btn">Add</button>
       </div>

       <div className="pantry-list">

        <div className="pantry-item">
          <span>Ingredient 1</span>
          <button className="remove-btn">Remove</button>
        </div>

        <div className="pantry-item">
          <span>Ingredient 2</span>
          <button className="remove-btn">Remove</button>
        </div>

        <div className="pantry-item">
          <span>Ingredient 3</span>
          <button className="remove-btn">Remove</button>
        </div>

       </div> 
    </section>
  );
}

export default PantryPage;