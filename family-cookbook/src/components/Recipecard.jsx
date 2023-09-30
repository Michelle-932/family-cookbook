import React from 'react'

function recipecard() {
    return (
        <div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800">
            <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracki">Donec lectus leo</h2>
                    <p className="text-gray-800">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                </div>
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-violet-600 text-gray-50">See Recipe</button>
            </div>
        </div>
    )
}

export default recipecard


