const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get All Forms
router.get("/", async (req, res) => {
  const forms = await Team.findMany();
  res.json(forms);
});

// Get Team by Date
router.get("/:id", async (req, res) => {
  const team = await Team.findMany(req.params.id);
  res.json(team);
});

// Get Users by Team ID
router.get("/:id/users", async (req, res) => {
  const usersByTeam = await User.find({ team: req.params.id });
  res.json(usersByTeam);
});

// Create Team
router.post("/", async (req, res) => {
  const team = await Team.create(req.body);
  res.json(team);
});

// Delete Team by ID
router.delete("/:id", async (req, res) => {
  const team = await Team.findById(req.params.id);
  team.remove();
  res.json(team);
});

module.exports = router;
