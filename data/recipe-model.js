const db = require("./config");

function getRecipes() {
  return db("recipe");
}
function getShoppingList(recipe_id) {
  return db("ingredients as i")
    .where("recipe_id", recipe_id)
    .select(["i.ingredients"]);
}

function getInstructions(recipe_id) {
  return db("instructions as i")
    .where("recipe_id", recipe_id)
    .select(["i.instructions"]);
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};
