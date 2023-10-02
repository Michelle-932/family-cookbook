import React, {useState, useEffect} from 'react'
import Recipecard from './Recipecard.jsx'

function recipegrid() {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    useEffect(() => {
        // Step 1: Fetch Recipes
        const fetchRecipes = async () => {
            try {
                const response = await fetch('http://localhost:8000/recipes'); 
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setRecipes(data);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        // Step 2: Trigger Data Fetching When Component Mounts
        fetchRecipes();
    }, []); // Empty dependency array ensures the effect runs once when the component mounts

    const handleRecipeClick = (recipe) => {
        setSelectedRecipe(recipe);
    }


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {recipes.map((recipe, index) => (
                <Recipecard 
                    key={index} 
                    recipe={recipe}
                    onClick={() => handleRecipeClick(recipe)} //pass click handler to each card
                /> // Pass the recipe data as a prop
            ))}
            {selectedRecipe && <Recipedisplay recipe={selectedRecipe} />}
        </div>
    );
}

export default recipegrid