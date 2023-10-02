import React, {useState} from 'react'
import axios from 'axios'




function recipeform() {
    console.log('Component is rendering...')
    const [formData, setFormData] = useState({
        contributor: '',
        contributor2: '',
        recipe_title: '',
        cooktime: '',
        servings: 0,
        course: '',
        ingredients: [''],
        directions: '',
        cooking_notes: '',
        special_story: '',
        photo_url: '',
        photo2_url: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log('Selected value:', value)
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleIngredientChange = (e, index) => {
        const newIngredients = [...formData.ingredients];
        newIngredients[index] = e.target.value;
        setFormData({
            ...formData,
            ingredients: newIngredients,
        });
    };

    const handleAddIngredient =() => {
        setFormData({
            ...formData,
            ingredients: [...formData.ingredients, ''],
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:8000/addrecipe', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (response.status == 201) {
                // Handle successful submission, e.g., show a success message.
                console.log('Recipe submitted successfully!');
                window.location.reload();
            } else {
                // Handle error, e.g., show an error message.
                console.error('Error submitting recipe:', response.statusText);
            }
        } catch (error) {
            // Handle network or other errors.
            console.error('Network or other error:', error);
        }
    };




    return (
        <>
            <section className="p-6 bg-gray-100 text-gray-900">
                <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Tell Us About<br className="sm-hidden" /> Your Recipe</p>
                            <p className="text-xs">Fill out these fields as best you can.</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="contributor" className="text-sm">Contributor</label>
                                <select 
                                    name="contributor"
                                    id="contributor" 
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
                                    onChange={handleInputChange}
                                    value={formData.contributor}
                                >
                                    <option value="">Select</option>
                                    <option value="Antoine">Antoine</option>
                                    <option value="Barbara">Barbara</option>
                                    <option value="Brenda">Brenda</option>
                                    <option value="Cristal">Cristal</option>
                                    <option value="Darren">Darren</option>
                                    <option value="David">David</option>
                                    <option value="Dennis">Dennis</option>
                                    <option value="Derek S">Derek S</option>
                                    <option value="Derrick W">Derrick W</option>
                                    <option value="Destiny">Destiny</option>
                                    <option value="Dominique">Dominique</option>
                                    <option value="Jocelyn">Jocelyn</option>
                                    <option value="Lanette">Lanette</option>
                                    <option value="Linda">Linda</option>
                                    <option value="Lois">Lois</option>
                                    <option value="Martha">Martha</option>
                                    <option value="Michelle">Michelle</option>
                                    <option value="Opal">Opal</option>
                                    <option value="Raquel">Raquel</option>
                                    <option value="Renee">Renee</option>
                                    <option value="Russell">Russell</option>
                                    <option value="Sheronda">Sheronda</option>
                                    <option value="Sylvester">Sylvester</option>
                                    <option value="Vivian">Vivian</option>
                                    <option value="Yolanda">Yolanda</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="contributor2" className="text-sm">Second Contributor (optional)</label>
                                <select 
                                    name="contributor2"
                                    id="contributor2" 
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
                                    onChange={handleInputChange}
                                    value={formData.contributor2}
                                >
                                    <option value="">Select</option>
                                    <option value="Antoine">Antoine</option>
                                    <option value="Barbara">Barbara</option>
                                    <option value="Brenda">Brenda</option>
                                    <option value="Cristal">Cristal</option>
                                    <option value="Darren">Darren</option>
                                    <option value="David">David</option>
                                    <option value="Dennis">Dennis</option>
                                    <option value="Derek S">Derek S</option>
                                    <option value="Derrick W">Derrick W</option>
                                    <option value="Destiny">Destiny</option>
                                    <option value="Dominique">Dominique</option>
                                    <option value="Jocelyn">Jocelyn</option>
                                    <option value="Lanette">Lanette</option>
                                    <option value="Linda">Linda</option>
                                    <option value="Lois">Lois</option>
                                    <option value="Martha">Martha</option>
                                    <option value="Michelle">Michelle</option>
                                    <option value="Opal">Opal</option>
                                    <option value="Raquel">Raquel</option>
                                    <option value="Renee">Renee</option>
                                    <option value="Russell">Russell</option>
                                    <option value="Sheronda">Sheronda</option>
                                    <option value="Sylvester">Sylvester</option>
                                    <option value="Vivian">Vivian</option>
                                    <option value="Yolanda">Yolanda</option>
                                </select>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="recipe_title" className="text-sm">Recipe Title</label>
                                <input 
                                    id="recipe_title" 
                                    name="recipe_title"
                                    type="text" 
                                    placeholder="Name of Recipe" 
                                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" 
                                    onChange={function(e) { handleInputChange(e, 'recipe_title'); }}
                                    value={formData.recipe_title}
                                />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="servings" className="text-sm">Servings</label>
                                <input 
                                    name="servings"
                                    id="servings" 
                                    type="number" 
                                    placeholder="0" 
                                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" 
                                />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="course" className="text-sm">Course</label>
                                <select 
                                    name="course"
                                    id="course" 
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
                                    onChange={handleInputChange}
                                    value={formData.course}
                                >
                                    <option value="">Select</option>
                                    <option value="Main Dish">Main Dish</option>
                                    <option value="Side">Side</option>
                                    <option value="Dessert">Dessert</option>
                                    <option value="Instant Pot">Instant Pot</option>
                                    <option value="Emergency Checklist">Emergency Checklist</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="cooktime" className="text-sm">Cooking Time</label>
                                <input 
                                    name="cooktime"
                                    id="cooktime" 
                                    type="text" 
                                    placeholder="" 
                                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" 
                                    onChange={(e) => handleInputChange(e, 'cooktime')}
                                    value={formData.cooktime}
                                />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="photo_url" className="text-sm">Photo URL</label>
                                <p className="text-xs">Upload your photo to a site like Flickr or Imgur. Paste the web address of your photo here.</p>
                                <input 
                                    name="photo_url"
                                    id="photo_url" 
                                    type="url" 
                                    placeholder="" 
                                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                                    onChange={(e) => handleInputChange(e, 'photo_url')}
                                    value={formData.photo_url}
                                />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Ingredients</p>
                            <p className="text-xs">Enter your recipe's ingredients one per line. Don't forget the measurements!</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

                            {/* <div className="col-span-full">
                                <label htmlFor="ingredients" className="text-sm"></label>
                                <input 
                                    name="ingredients"
                                    id="ingredients" 
                                    type="text" 
                                    placeholder="Ingredient" 
                                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                                    onChange={function(e) { handleInputChange(e, 'ingredients'); }}
                                    value={formData.ingredients}

                                />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="ingredients" className="text-sm"></label>
                                <input 
                                    name="ingredients"
                                    id="ingredients" 
                                    type="text" 
                                    placeholder="Ingredient" 
                                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                                    onChange={function(e) { handleInputChange(e, 'ingredients'); }}
                                    value={formData.ingredients}

                                />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="ingredients" className="text-sm"></label>
                                <input 
                                    name="ingredients"
                                    id="ingredients" 
                                    type="text" 
                                    placeholder="Ingredient" 
                                    className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                                    onChange={function(e) { handleInputChange(e, 'ingredients'); }}
                                    value={formData.ingredients}

                                />
                            </div> */}
                            

                            <div className="col-span-full">
                                <label htmlFor="ingredients" className="text-sm"></label>
                                {formData.ingredients.map((ingredient, index) => (
                                    <div key={index}>
                                        <input
                                            type="text"
                                            name={`ingredients[${index}]`}
                                            value={ingredient}
                                            onChange={(e) => handleIngredientChange(e, index)}
                                            placeholder="Ingredient"
                                            className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" 
                                        />
                                        {index === formData.ingredients.length - 1 && (
                                            <button type="button" onClick={handleAddIngredient}>Click to Add Ingredient</button>
                                        )}
                                    </div>
                                ))}
                            </div>
                            {/* <div className="col-span-full">
                                <label for="ingredients" className="text-sm">Ingredient</label>
                                <input id="ingredients" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
                            </div>
                            <div className="col-span-full">
                                <label for="ingredients" className="text-sm">Ingredient</label>
                                <input id="ingredients" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
                            </div>
                            <div className="col-span-full">
                                <label for="ingredients" className="text-sm">Ingredient</label>
                                <input id="ingredients" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
                            </div>
                            <div className="col-span-full">
                                <label for="ingredients" className="text-sm">Ingredient</label>
                                <input id="ingredients" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
                            </div>
                            <div className="col-span-full">
                                <label for="ingredients" className="text-sm">Ingredient</label>
                                <input id="ingredients" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
                            </div>
                            <div className="col-span-full">
                                <label for="ingredients" className="text-sm">Ingredient</label>
                                <input id="ingredients" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900" />
                            </div> */}


                        </div>
                    </fieldset>
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Tell Us How to Cook It</p>
                            <p className="text-xs">Add directions, special notes, or memories here.</p>
                        </div>

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full">
                                <label htmlFor="directions" className="text-sm">Directions</label>
                                <textarea 
                                name="directions"
                                id="directions" 
                                placeholder="Add directions here" 
                                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                                onChange={(e) => handleInputChange(e, 'directions')}
                                value={formData.directions}>

                                </textarea>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="notes" className="text-sm">Notes</label>
                                <textarea 
                                name="cooking_notes"
                                id="cooking_notes" 
                                placeholder="Add special ingredient notes or safety tips" 
                                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                                onChange={(e) => handleInputChange(e, 'cooking_notes')}
                                value={formData.cooking_notes}>

                                </textarea>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="story" className="text-sm">Special Story</label>
                                <textarea 
                                name="special_story"
                                id="special_story" 
                                placeholder="Add any special memories or quotes here" 
                                className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                                onChange={(e) => handleInputChange(e, 'special_story')}
                                value={formData.special_story}>
                                </textarea>
                            </div>


                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="px-8 py-3 font-semibold rounded-full bg-gray-800 text-gray-100"
                            >Submit
                            </button>

                        </div>
                    </fieldset>
	            </form>
            </section>
        
        </>
    )
}

export default recipeform