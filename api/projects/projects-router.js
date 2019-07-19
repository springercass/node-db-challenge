const express = require("express");

const router = express.Router();

const projectsDb = require("./projects-model");
const { validateProject, validateAction } = require("../middleware");

router.get("/:id", async (req, res) => {
  try {
    const project = await projectsDb.getProjectById(req.params.id);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({
      error: "The project with this specific ID could not be retrieved."
    });
  }
});

router.post("/", validateProject, async (req, res) => {
  try {
    const project = await projectsDb.addProject(req.body);
    console.log(project);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: "The project could not be added." });
  }
});

router.post("/actions", validateAction, async (req, res) => {
  try {
    const action = await projectsDb.addAction(req.body);
    console.log(action);
    res.status(200).json(action);
  } catch (error) {
    res.status(500).json({ error: "The action could not be added." });
  }
});

module.exports = router;
