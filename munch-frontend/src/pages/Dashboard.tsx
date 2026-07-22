
import { useState, useEffect, useContext } from 'react';
import './Dashboard.css';
import { PantryContext} from '../context/PantryContext';
import { RecipeContext} from '../context/RecipeContext';

function Dashboard() {
  
  const { ingredientList } = useContext(PantryContext);
  const { searchRecipes, randomRecipes, recipeList } = useContext(RecipeContext);
  
  const [query , setQuery] = useState('');
  const ingredients = ingredientList.map(i => i.ingredient).join(',')

    useEffect(() => {
      
      if (ingredientList.length > 0)
      {
        randomRecipes(ingredients)
      }
      

    }, [ingredientList.length]);

  return (
    <section className="screen" id="home">

        <div className="search-bar">
          <form className='recipe-search'>
            <input type="text" onChange={(e) => setQuery(e.target.value)} placeholder="Search for a recipe..."/>
            <button type='button' className='search-btn' onClick={() => searchRecipes(query, ingredients)}></button>
          </form>
        </div>

      <div className="filter-bar">
        <label className="toggle-chip"><span className="switch"></span>Only show what I can make</label>
        <select className="sort-select"><option>Best match first</option><option>Quickest first</option><option>Newest first</option></select>
      </div>

      <div className="results-header">
        <h2>Results</h2>
        <p>Showing {recipeList.length} recipes</p>
      </div>

      <div className="recipe-grid">
        
        {recipeList.map((recipes, index) => (
          <div className="recipe-card" key={index}>
            <img src={recipes.image} alt=""/>
            <div className="card-body">
              <h3>{recipes.title}</h3>
              <div className="card-meta">{recipes.readyInMinutes} MIN &middot; SERVES {recipes.servings} </div>
            </div>
          </div>
        ))}
        
      </div>  
        
    </section>
  );
}

export default Dashboard;