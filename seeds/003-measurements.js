exports.seed = function (knex) {
  return knex("masurements").insert([
    { measurements: "1/2 cup", ingredients_id: "4", recipe_id: "1" },
    { measurements: "1 cup", ingredients_id: "7", recipe_id: "1" },
    { measurements: "1 cup", ingredients_id: "8", recipe_id: "1" },
    { measurements: "1", ingredients_id: "6", recipe_id: "1" },
  ]);
};
