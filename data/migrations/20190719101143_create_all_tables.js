exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl
        .string("name", 128)
        .notNullable()
        .unique();
      tbl.string("description", 256).notNullable();
      tbl.boolean("completed").notNullable();
    })
    .createTable("project_actions", tbl => {
      tbl.increments();
      tbl
        .integer("projects_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("actions_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("actions", tbl => {
      tbl.increments();
      tbl
        .string("description", 256)
        .notNullable()
        .unique();
      tbl.string("notes", 256).notNullable();
      tbl.boolean("completed").notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("project_actions")
    .dropTableIfExists("actions");
};
