
import { useContext, useState, useEffect } from 'react';
import { PantryContext } from '../context/PantryContext';

function IngredientSearch() {
    
  const { ingredients, setIngredients, addIngredient } = useContext(PantryContext);

  const [query , setQuery] = useState('');
  const [suggestions, setSuggestions] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSuggestions(query);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  useEffect(() => {
    if (suggestions.length > 0) {
      console.log('Suggestions:', suggestions);
    }
  }, [suggestions]);

    return (

        <div className="pantry-search">

        <form className="search-form">
          <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" className="ingredient-input" placeholder="Enter ingredient..." />
          <input value={ingredients.qty} onChange={(e) => setIngredients({ ...ingredients, qty: e.target.value })} type="text" className="qty-input" placeholder="Qty" />

          <select className="unit-select" value={ingredients.unit} onChange={(e) => setIngredients({ ...ingredients, unit: e.target.value })}>
            <option value="">Unit</option>
            <option value="cups">Cups</option>
            <option value="tablespoons">Tbsp</option>
            <option value="teaspoons">Tsp</option>
          </select>

          <button type="button" className="add-btn" onClick={addIngredient}>+</button>
        </form>
        </div>
    );
}

export default IngredientSearch;