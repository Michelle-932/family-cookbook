import React from 'react';
import { useParams } from 'react-router-dom';
import Recipedisplay from './Recipedisplay';

function RecipePage() {
  const { recipeTitle } = useParams();

  // Fetch the recipe details using recipeTitle (you'll need to implement this)

  return (
    <div>
      <h1>Recipe Page</h1>
      {/* <Recipedisplay recipe={/* Fetch and pass the recipe details here */}
    </div>
  );
}

export default RecipePage;