
import { createContext, useState } from "react";
import type { ReactNode } from "react";

type Recipe = {

  id: number;
  image : string;
  title : string;
  missedIngNum : number;
  missedIng : [];
  prepTime: string;
  cookTime: string;

};

export const RecipeContext = createContext({

    recipes: { id: 0, image: '', title: '', missedIngNum: 0, missedIng: [], prepTime: '', cookTime: ''},
    setRecipes: (recipes: Recipe) => {},
    recipeList: [] as Recipe[],
    setRecipeList: (recipeList: Recipe[]) => {}
});

export function RecipeProvider({children} : { children : ReactNode}) {


    const [recipes, setRecipes] = useState<Recipe>({

        id: 0,
        image : '',
        title : '',
        missedIngNum : 0,
        missedIng : [],
        prepTime: '',
        cookTime: ''
    })

    const [recipeList, setRecipeList] = useState<Recipe[]>([]);

    return (
        <RecipeContext.Provider value={{recipes, setRecipes, recipeList, setRecipeList}}>
            {children}
        </RecipeContext.Provider>
    )
}