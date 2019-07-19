exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Project 1",
          description: "This is the first project.",
          completed: false
        },
        {
          name: "Project 2",
          description: "This is the second project.",
          completed: false
        },
        {
          name: "Project 3",
          description: "This is the third project.",
          completed: false
        }
      ]);
    });
};
