import React from 'react'
// import { Link } from 'react-router-dom'

function recipecard({recipe, onClick}) {
    return (
        <div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800">
            <img src={recipe.photo_url}
                alt={recipe.recipe_title} 
                className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" 
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracki">{recipe.recipe_title}</h2>
                    <p className="text-gray-800">{recipe.contributor}</p>
                </div>
                {/* <Link to={`/recipe/${recipe.recipe_title}`}> */}
                    <button 
                        type="button" 
                        className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-violet-600 text-gray-50"
                        onClick={onClick}
                    >
                        See Recipe
                    </button>
                {/* </Link> */}
            </div>
        </div>
    )
}

export default recipecard


