
import { createContext, useContext, useState } from 'react';

type Ingredient = {
  ingredient: string;
  qty: string;
  unit: string;
};

const PantryContext = createContext({
  ingredients: { ingredient: '', qty: '', unit: '' },
  ingredientList: [] as Ingredient[],
  setIngredients: (ingredients: Ingredient) => {},
  setIngredientList: (ingredientList: Ingredient[]) => {},
});

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