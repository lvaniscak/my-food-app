const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema([{
  name: String,
  quantity: String
}]);

const recipeSchema = new mongoose.Schema({
  name: String,
  category: String,
  ingredients: [ingredientSchema],
  instructions: String,
  prepTime: Number, 
  cookTime: Number, 
  servings: Number,
  author: String,
  imageUrl: String,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
