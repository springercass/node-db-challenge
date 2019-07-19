module.exports = {
  validateProject,
  validateAction
};

function validateProject(req, res, next) {
  const project = req.body;
  if (!project.name) {
    res.status(400).json({ error: "Please provide a name for your project." });
  } else {
    next();
  }
}

function validateAction(req, res, next) {
  const action = req.body;
  if (!action.description) {
    res
      .status(400)
      .json({ error: "Please provide a description for your action." });
  } else {
    next();
  }
}
