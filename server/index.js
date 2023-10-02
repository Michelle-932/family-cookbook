const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

const uri = process.env.URI

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'app-data',
})

const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB database connection established sucessfully')
})

// Default msg -- DELETE FOR DEPLOYMENT!
app.get('/', (req, res) => {
    res.send('Welcome to the Recipe App!');
});

// Define a Mongoose Schema and Model for the recipe data
const recipeSchema = new mongoose.Schema({
    contributor: String,
    contributor2: String,
    recipe_title: String,
    cooktime: String,
    servings: Number,
    course: String,
    ingredients: [String], //an array of strings
    directions: String,
    cooking_notes: String,
    special_story: String,
    photo_url: String,
    photo2_url: String,
}, {collection: 'recipes'});
  
const Recipe = mongoose.model('Recipe', recipeSchema);
  
// API Route to Add a Recipe
app.post('/addrecipe', async (req, res) => {
    const {
      contributor,
      contributor2,
      recipe_title,
      cooktime,
      servings,
      course,
      ingredients,
      directions,
      cooking_notes,
      special_story,
      photo_url,
      photo2_url,
    } = req.body;
  
    try {
      const newRecipe = new Recipe({
        contributor,
        contributor2,
        recipe_title,
        cooktime,
        servings,
        course,
        ingredients,
        directions,
        cooking_notes,
        special_story,
        photo_url,
        photo2_url,
      });
  
      const savedRecipe = await newRecipe.save();
      res.status(201).json(savedRecipe);
    } catch (err) {
      console.error('Error adding recipe:', err);
      res.status(500).send('An error occurred while adding the recipe.');
    }
});

//API to retrieve all recipes
app.get('/recipes', async (req, res) => {
    try {
        console.log('Entered /recipes route')
        const recipes = await Recipe.find();
        console.log('Retrieved recipes:', recipes)
        res.status(200).json(recipes);
    } catch (error) {
        console.error('Error retrieving recipes:', error)
        res.status(500).json({error: 'An error occurred while retrieving recipes'})
    }
})

  
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});