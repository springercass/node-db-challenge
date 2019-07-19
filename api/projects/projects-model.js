const projectsDb = require("../../data/dbConfig");

module.exports = {
  getProjectById,
  addProject,
  addAction
};

function getProjectById(id) {
  return projectsDb("projects")
    .where("id", id)
    .first()
    .then(() => {
      return getActions(id);
    });
}

function getActions(id) {
  return projectsDb("actions").where("project_id", id);
}

function addProject(project) {
  return projectsDb("projects")
    .insert(project)
    .then(arrayOfIds => projectsDb("projects").where({ id: arrayOfIds[0] }));
}

function addAction(action) {
  return projectsDb("actions")
    .insert(action)
    .then(arrayOfIds => projectsDb("actions").where({ id: arrayOfIds[0] }));
}
