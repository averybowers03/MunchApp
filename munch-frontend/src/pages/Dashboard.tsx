
import { useState, useEffect, useContext } from 'react';
import './Dashboard.css';
import { PantryContext} from '../context/PantryContext';
import { RecipeContext} from '../context/RecipeContext';
import { Link } from 'react-router-dom';


function Dashboard() {
  
  const { ingredientList } = useContext(PantryContext);
  const { searchRecipes, randomRecipes, recipeList } = useContext(RecipeContext);
  
  const [query , setQuery] = useState('');
  const ingredients = ingredientList.map(i => i.ingredient).join(',');

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
        
        {recipeList.map(recipe => (
          <Link to={`/pages/RecipePage/${recipe.id}`} key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt=""/>
            <div className="card-body">
              <h3>{recipe.title}</h3>
              <div className="card-meta">{recipe.readyInMinutes} &middot; {recipe.servings} SERVINGS</div>
            </div>
          </Link>
        ))}

        <Link to={`/pages/RecipePage/${716429}`}  className="recipe-card">
          <img src="https://spoonacular.com/recipeImages/716429-312x231.jpg" alt=""/>
          <div className="card-body">
            <h3>title</h3>
            <div className="card-meta"> MIN &middot; SERVES </div>
          </div>
        </Link>
        
      </div>  
        
    </section>
  );
}

export default Dashboard;