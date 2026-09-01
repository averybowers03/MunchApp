
import { RecipeContext } from '../context/RecipeContext';
import {  useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./RecipePage.css";

function RecipePage() {

const { id } = useParams();

const {recipes, setRecipes} = useContext(RecipeContext)


useEffect(() => {
      
     fetch(`/api/recipes/searchById?id=${id}`)
      .then(res => res.json())
      .then(data => setRecipes(data))
      .catch(error => {
      console.error('Error fetching ingredients:', error)}); 
      
    }, [id]);

    return(
        <section className='screen'>

            <div className='header-grid'>

                <div className='recipe-header'>
                    <h1>{recipes.title}</h1>
                    <span className='srcName'>by {recipes.sourceName}</span>
                    <a className='srcUrl' href={recipes.sourceUrl} target="_blank" rel="noopener noreferrer">
                        View Original Recipe
                    </a>
                    <div className='meta-grid'>
                        <span ><b>Prep</b>  -  {recipes.preparationMinutes} mins</span>
                        <span className='cook-time'> <b>Cook</b>  -  {recipes.cookingMinutes} mins</span>
                        <span> <b>Total</b>  -  {recipes.readyInMinutes} mins</span>
                    </div>
                </div>

                <div className='img'>
                    <img src={recipes.image} alt={recipes.title} />
                </div>

            </div>

            <div className='recipe-info-grid'>

                <div className='summary'>
                        <p>{recipes.summary}</p>
                </div>

                <div className='nutrition'>
                    <h2>Nutrition</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Nutrient</th>
                                <th>Amount</th>
                                <th>% Daily Values</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipes.nutrition.nutrients?.map((nutrient, i) => (
                            <tr key={i}>
                                <td>{nutrient.name}</td>
                                <td>{nutrient.amount}{nutrient.unit}</td>
                                <td>{nutrient.percentOfDailyNeeds}%</td>
                            </tr>
                            ))}
                        </tbody>
                        
                    </table>
                </div>

                <div className='ingredient-list'>
                    <h2>Ingredients</h2>
                    <ul>
                        
                        {recipes.extendedIngredients?.map((ingredient, i) => (
                        <li key={i}>{ingredient.name} - {ingredient.amount} {ingredient.unit}</li>
                        ))}
                    </ul>
                </div>

                <div className='instructions'>
                    <h2>Instructions</h2>
                
                {recipes.analyzedInstructions?.map((section, i) => (
                    <div key={i}>
                        {section.name && <h2>{section.name}</h2>}
                        <ol>
                            {section.steps.map(step => (
                                <li key={step.number}>{step.step}</li>
                                ))}

                        </ol>
                    </div>
                ))}
                </div>
            </div>
        </section>
        
    )
}

export default RecipePage