import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import CustomAccordion from './CustomAccordion';
import star from './image/star1.png';
import clickStar from'./image/star.png';



function GetRecipe() {
  const [open, setOpen] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [instructions, setInstructions] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [servings, setServings] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [ingredients, setIngredients] = useState([{ name: '', quantity: '' }]);
  const [searchRecipe, setSearchRecipe] =useState('');
  const [results, setResults] = useState([]);
 

  useEffect(() => {
    axios.get('http://localhost:4000/recipes')
      .then(response => {
        setRecipes(response.data);
        console.log(response)
      })
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  const handleIngredientChange = (index, field, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = value;
    setIngredients(newIngredients);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, { name: '', quantity: '' }]);
  };

  const removeIngredient = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  const addRecipe = () => {
    if (!name || !category || !instructions || !prepTime || !cookTime || !servings || !author || !imageUrl || ingredients.some(ing => !ing.name || !ing.quantity)) {
      alert('Please fill out all fields correctly.');
      return;
    }
  
    const newRecipe = {
      name,
      category,
      instructions,
      prepTime: parseInt(prepTime),
      cookTime: parseInt(cookTime),
      servings: parseInt(servings),
      author,
      imageUrl,
      ingredients
    }

    axios.post('http://localhost:4000/recipes', newRecipe)
      .then(response => {
        setRecipes([response.data, ...recipes]);
        setResults([response.data, ...recipes])
        clearForm();
        setOpen(0)
      })
      .catch(error => console.error('Error adding recipe:', error));
  };

  const clearForm = () => {
    setName('');
    setCategory('');
    setInstructions('');
    setPrepTime('');
    setCookTime('');
    setServings('');
    setAuthor('');
    setImageUrl('');
    setIngredients([{ name: '', quantity: '' }]);
  };

  const renderFormInput = (placeholder, value, setter, type = "text") => (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={e => setter(e.target.value)}
      className="justify-items-center text-center w-40 rounded-full border-0 py-1.5 pl-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-2"
    />
  );

  const handleOpen = (id) => {
    setOpen(open === id ? 0 : id);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const filteredRecipes = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(searchRecipe.toLowerCase())
    );
    setResults(filteredRecipes);
  };

  const handleFilter = (selectedCategory) => {
    const filteredRecipes = recipes.filter(recipe =>
      recipe.category.toLowerCase() === selectedCategory.toLowerCase()
    );
    setResults(filteredRecipes);
  };
 

  return (
    <div className="grid mt-2 bg-sky-900 text-center justify-center items-center text-gray-700 bg-white shadow-md w-full  rounded-xl bg-clip-border">
      <h1 className="text-2xl font-bold mb-4">Recipe List</h1>
      <div className="w-full flex flex-col items-center mb-4">
          <CustomAccordion
            id={1}
            title='Add recipe'
            content={
            <div className="mb-4">
              {renderFormInput("Name", name, setName)}
              {renderFormInput("Category", category, setCategory)}
              {renderFormInput("Prep Time", prepTime, setPrepTime, "number")}
              {renderFormInput("Cook Time", cookTime, setCookTime, "number")}
              {renderFormInput("Servings", servings, setServings, "number")}
              {renderFormInput("Author", author, setAuthor)}
              {renderFormInput("Image URL", imageUrl, setImageUrl)}

              <textarea 
                placeholder="Instructions" 
                value={instructions} 
                onChange={e => setInstructions(e.target.value)} 
                className="justify-items-center text-center w-full rounded-xl border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-2" 
              />

              <h3 className="font-bold mb-2">Ingredients</h3>
                {ingredients.map((ingredient, index) => (
                <div key={index} className="mb-2">
                  {renderFormInput("Ingredient Name", ingredient.name, (value) => handleIngredientChange(index, 'name', value))}
                  {renderFormInput("Quantity", ingredient.quantity, (value) => handleIngredientChange(index, 'quantity', value))}
                  <button 
                    onClick={() => removeIngredient(index)} 
                    className="w-60 h-10 me-2 mb-2 text-center text-sm font-medium text-gray-900 focus:outline-none bg-red-500 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >Remove</button>
                </div>
                ))}
                <button 
                  onClick={addIngredient} 
                  className="w-60 h-10 me-2 mb-2 text-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >Add Ingredient
                </button>
                <button 
                  onClick={addRecipe} 
                  className="w-60 h-10 text-center me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >Add Recipe</button>
              </div>
                }
                open={open}
                handleOpen={handleOpen}
              />
            <CustomAccordion
                id={2}
                title='Search recipe'
                content={
                  <div className='bg-sky-900 justify-center items-center w-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border'>
                      <form onSubmit={handleSearch}>
                        <input 
                        placeholder='Search recipe'
                        value={searchRecipe}
                        onChange={e =>setSearchRecipe(e.target.value)}
                        className='justify-items-center text-center w-full rounded-full mt-5 border-0 py-1.5 pl-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' 
                        />
                          <button 
                         
                          className='w-60 h-10 me-2 mb-2 text-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
                           Search</button>
                       </form>
                  </div>
                }
                open={open}
                handleOpen={handleOpen}
            />
             <CustomAccordion
               id={3}
               title="Filter by category:"
               content= {['Soup', 'Main food', 'Dessert', 'Lunch', 'Dinner', 'Meal food', 'Vegan', 'Pasta', 'Salad', 'Cake', 'Breakfast'].map(category => (
                 <button key={category}
                    onClick={() =>  handleFilter(category)}
                    className='justify-items-center py-2.5 h-full w-96 text-center me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
                   {category}
                 </button>
                 ))}
               open={open}
               handleOpen={handleOpen}
           /> 
           </div>
              <div>
                <div className='grid'>
                    <ul className='grid grid-cols-3'>
                        {results.map((recipe, index) => (
                          <li key={index} className="grid mt-2 bg-sky-900 justify-items-center text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                              <h2 className="text-xl font-bold">{recipe.name}</h2>
                            <p>Category: {recipe.category}</p>
                            <div>
                             <img src={recipe.imageUrl} alt={recipe.name} className="w-40 h-40 justify-items-center object-cover" />
                            </div>
                            <div>
                            <p>Prep Time: {recipe.prepTime} minutes</p>
                            <p>Cook Time: {recipe.cookTime} minutes</p>
                            <p>Servings : {recipe.servings}</p>
                            <p>Author : {recipe.author}</p>
                          </div>
                          <button><img src={star} className='left-2 w-5 h-5'></img></button>
                          <Popup trigger={<button className="w-60 h-10 mt-2 mb-5 text-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                          >Show Recipe</button>} modal>
                            {close => (
                            <div className ='overflow-scroll'>
                              <button onClick={close} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 focus:outline-none">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                              </button>
                            <div className="mb-2">
                                <h3 className="font-bold">Ingredients : </h3>
                                <ul className="list-disc list-inside">
                                  {recipe.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient.quantity} {ingredient.name}</li>
                                  ))}
                                </ul>
                              </div>
                              <div className="mb-2">
                               <h3 className="font-bold">Instructions : </h3>
                                <p>{recipe.instructions}</p>
                              </div>
                            </div>
                           )}
                         </Popup>
                       </li>
                      ))}
                    </ul>
                </div>
            </div>
        </div>
  );
}

export default GetRecipe