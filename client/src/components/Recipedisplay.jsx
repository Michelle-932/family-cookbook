import React from 'react'

function recipedisplay({ recipe }) {
    const { contributor, contributor2, recipe_title, cooktime, servings, course, ingredients, directions, cooking_notes, special_story, photo_url, photo2_url } = recipe;
    
    return (
        <div>
            <h1>{recipe_title}</h1>
            <p>From the kitchen of {contributor} {contributor2 && `and ${contributor2}`}</p>
            <p>Cook Time: {cooktime}</p>
            <p>Servings: {servings}</p>
            <p>Course: {course}</p>

            <img src={photo_url} alt={recipe_title} style={{ maxWidth: '800px' }} />

            <h2>Ingredients:</h2>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>

            <h2>Directions:</h2>
            <p>{directions}</p>

            {cooking_notes && (
                <div>
                    <h2>Cooking Notes:</h2>
                    <p>{cooking_notes}</p>
                </div>
            )}

            {special_story && (
                <div>
                    <h2>Special Story:</h2>
                    <p>{special_story}</p>
                </div>
            )}

            {photo2_url && (
                <div>
                    <img src={photo2_url} alt={recipe_title} style={{ maxWidth: '800px' }} />
                </div>
            )}
        </div>
    );
}

export default recipedisplay;