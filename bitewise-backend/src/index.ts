import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/api/recipes', (req, res) => {
  fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,flour,sugar&number=5&ranking=1&ignorePantry=true&apiKey=' + process.env.SPOONACULAR_API_KEY) // Replace
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(error => {
      console.error('Error fetching recipes:', error);
      res.status(500).json({ error: 'Failed to fetch recipes' });
    });
});

app.get('/api/ingredients', (req, res) => {
  fetch('https://api.spoonacular.com/food/ingredients/autocomplete?query=appl&number=5&apiKey=' + process.env.SPOONACULAR_API_KEY)
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(error => {
      console.error('Error fetching ingredients:', error);
      res.status(500).json({ error: 'Failed to fetch ingredients' });
    });
  });