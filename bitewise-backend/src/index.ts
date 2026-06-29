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

app.get('/api/recipes/search', async (req, res) => {
  const { ingredients } = req.query;

  if (!ingredients || typeof ingredients !== 'string') {
    return res.status(400).json({ error: 'ingredients query param is required' });
  }

  try {
    const url = `https://api.spoonacular.com/recipes/complexSearch?` +
      `includeIngredients=${encodeURIComponent(ingredients)}` +
      `&fillIngredients=true` +
      `&addRecipeInformation=true` +
      `&number=12` +
      `&apiKey=${process.env.SPOONACULAR_API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();
    res.json(data.results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
});