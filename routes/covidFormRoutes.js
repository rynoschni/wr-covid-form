const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get All Forms
router.get("/", async (req, res) => {
  const forms = await prisma.form.findMany();
  res.json(forms);
});

// Get Form by Date
router.get("/:id", async (req, res) => {
  const forms = await prisma.form.findMany({
    where: {
      userID: req.params.id
    }
  });

  res.json(forms);
});

// Get Users by Team ID
router.get("/:id/users", async (req, res) => {
  const usersByTeam = await User.find({ team: req.params.id });
  res.json(usersByTeam);
});

// Answer new form
router.post("/", async (req, res) => {
  const { question1, question2, question3, question4, question5, question6, question7, question8, signature1, signature1box, signature2, signature2box, userID } = req.body
  
  const form = await prisma.form.create({
    data: {
      question1,
      question2,
      question3,
      question4,
      question5,
      question6,
      question7,
      question8,
      signature1,
      signature1box,
      signature2,
      signature2box,
      userID,
    },
  });
  res.json({msg: "Your form was submitted!"});
});

// Delete Team by ID
router.delete("/:id", async (req, res) => {
  const team = await Team.findById(req.params.id);
  team.remove();
  res.json(team);
});

module.exports = router;
