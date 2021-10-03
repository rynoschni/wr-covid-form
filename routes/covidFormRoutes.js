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
  const { question1, question2, question3, question4, question5, q5Location, signature1, signature1box, userID } = req.body
  try {
    const form = await prisma.form.create({
      data: {
        question1,
        question2,
        question3,
        question4,
        question5,
        q5Location,
        signature1,
        signature1box,
        userID,
      },
    });
    console.log("Form",form)
    res.json(form); 
  }
  catch (error) {
    console.log(error);
    res.json({ msg: "Sorry, your form was not submitted.  Please try again." });
  }
  
});

// Delete Team by ID
router.delete("/:id", async (req, res) => {
  const team = await Team.findById(req.params.id);
  team.remove();
  res.json(team);
});

module.exports = router;
