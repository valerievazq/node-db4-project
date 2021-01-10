exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, ingredient: "salt" },
        { id: 2, ingredient: "pepper" },
        { id: 3, ingredient: "garlic powder" },
        { id: 4, ingredient: "tomato" },
        { id: 5, ingredient: "lettuce" },
        { id: 6, ingredient: "tortilla" },
        { id: 7, ingredient: "buffalo sauce" },
        { id: 8, ingredient: "cheese" },
      ]);
    });
};
