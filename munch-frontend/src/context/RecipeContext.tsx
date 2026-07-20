
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
  prepTime: number;
  cookTime: number;
  readyInMin: number;
  nutrition : [Nutrient];
  summary: string;
  useIngNum : number;
  missedIngNum : number;
  missedIng : [MissedIngredients];
};

export const RecipeContext = createContext({

    recipes: {
        id: 0,
        image: '',
        title: '',
        prepTime: 0,
        cookTime: 0,
        readyInMin: 0,
        nutrition: [],
        summary: '',
        useIngNum: 0,
        missedIngNum: 0,
        missedIng: []
    },
    setRecipes: (recipes: Recipe) => {},
    recipeList: [] as Recipe[],
    setRecipeList: (recipeList: Recipe[]) => {}
});

export function RecipeProvider({children} : { children : ReactNode}) {


    const [recipes, setRecipes] = useState<Recipe>({

        id: 0,
        image : '',
        title : '',
        prepTime: 0,
        cookTime: 0,
        readyInMin: 0,
        nutrition: [],
        summary: '',
        useIngNum: 0,
        missedIngNum : 0,
        missedIng : []
    })

    const [recipeList, setRecipeList] = useState<Recipe[]>([]);

    return (
        <RecipeContext.Provider value={{recipes, setRecipes, recipeList, setRecipeList}}>
            {children}
        </RecipeContext.Provider>
    )
}