
import { createContext, useState, ReactNode } from "react";

type Ingredient = {
  ingredient: string;
  qty: string;
  unit: string;
};

export const PantryContext = createContext({
  
  ingredients: { ingredient: '', qty: '', unit: '' },
  setIngredients: (ingredients: Ingredient) => {},
  ingredientList: [] as Ingredient[],
  setIngredientList: (ingredientList: Ingredient[]) => {},
  addIngredient: () => {},
  removeIngredient: (index: number) => {}
});
  
export function PantryProvider({ children } : { children: ReactNode }) {

  const [ingredients, setIngredients] = useState<Ingredient>({
      ingredient: '',
      qty: '',
      unit: ''
    });
  
    const [ingredientList, setIngredientList] = useState<Ingredient[]>([]);
    
    const addIngredient = () => {
      // Logic to add ingredient to the pantry list
      setIngredientList([...ingredientList, { ...ingredients }]);
      setIngredients({ ingredient: '', qty: '', unit: '' });
    };
  
    const removeIngredient = (index: number) => {
      // Logic to remove ingredient from the pantry list
      const updatedList = [...ingredientList];
      updatedList.splice(index, 1);
      setIngredientList(updatedList);
    }
  
  return (
    <PantryContext.Provider value={{ ingredients, setIngredients, ingredientList, setIngredientList, addIngredient, removeIngredient }}>
      {children}
    </PantryContext.Provider>
  )
}


