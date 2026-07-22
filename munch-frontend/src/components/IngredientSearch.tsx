
import { useContext, useState, useEffect, useRef } from 'react';
import { PantryContext } from '../context/PantryContext';

type Suggestion = {

  id: number
  name: string
}

function IngredientSearch() {
    
  const { ingredients, setIngredients, addIngredient } = useContext(PantryContext);

  const [query , setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  const skipFetch = useRef(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query.length == 0 || skipFetch.current == true) 
      {
          setSuggestions([]);
          skipFetch.current = false
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

    if (name.length != 0 && ingredients.qty != '' && ingredients.unit != '')
      {
        addIngredient(name.toLocaleLowerCase())
        setQuery('')
      }
  }

  function fillQuery(fill : string) {

    skipFetch.current = true
    setQuery(fill)
    setSuggestions([])
  }

    return (

        <div className="pantry-search">
          
            <form className="search-form">
              <div className='search-wrapper'>
                <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" className="ingredient-input" placeholder="Enter Ingredient..." />
                {suggestions.length > 0 && ( 
                    <ul className='suggestion-list'>
                      {suggestions.map(s => (
                        <li key={s.id} className='suggestion' onClick={() => fillQuery(s.name)}>{s.name}</li>
                      ))}
                    </ul>
                  )}
              </div>
              <input value={ingredients.qty} onChange={(e) => setIngredients({ ...ingredients, qty: e.target.value })} type="text" className="qty-input" placeholder="Qty" />

              <select className="unit-select" value={ingredients.unit} onChange={(e) => setIngredients({ ...ingredients, unit: e.target.value })}>
                <option value="">Unit</option>
                <option value="cups">cups</option>
                <option value="tbsp">tbsp</option>
                <option value="tsp">tsp</option>
                <option value="each">each</option>
                <option value="g">gram</option>
                <option value="kg">kg</option>
              </select>

              <button type="button" className="add-btn" onClick={() => HandleClick(query)}>+</button>
            </form>
        </div>
    );
}

export default IngredientSearch;