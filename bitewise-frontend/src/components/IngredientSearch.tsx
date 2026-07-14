
import { useContext, useState, useEffect } from 'react';
import { PantryContext } from '../context/PantryContext';



function IngredientSearch() {
    
  const { ingredients, setIngredients, addIngredient } = useContext(PantryContext);

  const [query , setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query.length === 0) 
        {
          setSuggestions([]);
          return;
        }
      fetch(`/api/ingredients?query=${query}`)
      .then(res => res.json())
      .then(data => setSuggestions(data))
      .catch(error => {
      console.error('Error fetching ingredients:', error);
    });
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

  function HandleClick(name : string) {

    addIngredient(name)
    setQuery('') 
}

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

          <button type="button" className="add-btn" onClick={() => HandleClick(query)}>+</button>
        </form>
        </div>
    );
}

export default IngredientSearch;