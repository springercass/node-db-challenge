exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("actions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          description: "This is the first description.",
          notes: "None.",
          completed: false,
          project_id: 1
        },
        {
          description: "This is the second description.",
          notes: "None.",
          completed: false,
          project_id: 2
        },
        {
          description: "This is the fifth description.",
          notes: "None.",
          completed: false,
          project_id: 3
        }
      ]);
    });
};
