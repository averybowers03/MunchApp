
import { createContext, useState } from "react";
import type { ReactNode } from "react";

type Nutrient = {

    name: string;
    amount: number;
    unit: string;
    dailyNeed: number;
}

type MissedIngredients = {

    id: number;
    name: string;
    amount: number;
    unit: string;
    unitShort: string;
}

type Recipe = {

  id: number;
  image : string;
  title : string;
  preparationMinutes: number;
  cookingMinutes: number;
  readyInMinutes: number;
  servings: number;
  nutrition : Nutrient[];
  summary: string;
  usedIngredientCount : number;
  missedIngredientCount : number;
  missedIngredients : MissedIngredients[];
};

export const RecipeContext = createContext({

    recipes: {
        id: 0,
        image: '',
        title: '',
        preparationMinutes: 0,
        cookingMinutes: 0,
        readyInMinutes: 0,
        servings: 0,
        nutrition: [] as Nutrient[],
        summary: '',
        usedIngredientCount: 0,
        missedIngredientCount: 0,
        missedIngredients: [] as MissedIngredients[]
    },
    setRecipes: (recipes: Recipe) => {},
    recipeList: [] as Recipe[],
    searchRecipes: (query: string, ingList: string) => {},
    randomRecipes: (ingList: string) => {}
});

export function RecipeProvider({children} : { children : ReactNode}) {


    const [recipes, setRecipes] = useState<Recipe>({

        id: 0,
        image : '',
        title : '',
        preparationMinutes: 0,
        cookingMinutes: 0,
        readyInMinutes: 0,
        servings: 0,
        nutrition: [],
        summary: '',
        usedIngredientCount: 0,
        missedIngredientCount : 0,
        missedIngredients : []
    })

    const [recipeList, setRecipeList] = useState<Recipe[]>([]);

    const searchRecipes = (query: string, ingList: string) => {

        setRecipeList([]);

         fetch(`/api/recipes/search?query=${query}&ingList=${ingList}`)
        .then(res => res.json())
        .then(data => setRecipeList(data))
        .catch(error => {
            console.error('Error fetching ingredients:', error);
        })
    }

    const randomRecipes = (ingList: string) => {

        setRecipeList([]);

        fetch(`/api/recipes/randomSearch?${ingList}`)
        .then(res => res.json())
        .then(data => setRecipeList(data))
        .catch(error => {
            console.error('Error fetching ingredients:', error);
        })
    }

    return (
        <RecipeContext.Provider value={{recipes, setRecipes, recipeList, searchRecipes, randomRecipes}}>
            {children}
        </RecipeContext.Provider>
    )
}