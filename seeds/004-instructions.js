exports.seed = function (knex) {
  return knex("instructions").insert([
    {
      steps:
        "mix all ingredients in a sauce pan, cook until hot. place all contents in a tortilla and wrap",
    },
  ]);
};
