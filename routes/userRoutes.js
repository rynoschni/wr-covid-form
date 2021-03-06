const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get All Users
router.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  console.log(users);
  // const users = await User.find({}).select('-password');
  res.json(users);
});

// Get User by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const paramID = parseInt(id);
  const user = await prisma.user.findUnique({
    where: {
      id: paramID,
    },
  });
  res.json(user);
});

// Create User
router.post("/", async (req, res) => {
  const {
    email,
    password,
    fname,
    lname,
    address1,
    address2,
    city,
    state,
    county,
    zip,
    phone,
    race,
    ethnicity,
    gender,
    dob,
  } = req.body;
  const hashPassword = bcrypt.hashSync(password, salt);
  const createdUser = await prisma.user.create({
    data: {
      email,
      password: hashPassword,
      fname,
      lname,
      address1,
      address2,
      city,
      state,
      county,
      zip,
      phone,
      race,
      ethnicity,
      gender,
      dob,
    },
  });
  res.json(createdUser);
});

// UserLogin
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (user && (await bcrypt.compareSync(password, user.password))) {
    const userProfile = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });
    console.log("user profile", userProfile)
    res.json(userProfile);
  } else {
    res.json({ msg: "Username or Password is incorrect" });
  }
});

// Update User
router.put("/update/:id", async (req, res) => {
  const userID = parseInt(req.params.id);
  const {
    email,
    fname,
    lname,
    address1,
    address2,
    city,
    state,
    county,
    zip,
    phone,
    race,
    ethnicity,
    gender,
    dob,
    ecFirstName,
    ecLastName,
    ecPhone,
    ecRelation,
  } = req.body;

  console.log("ID", userID), console.log("Body", req.body);
  const user = await prisma.user.update({
    where: {
      id: userID,
    },
    data: {
      email,
      fname,
      lname,
      address1,
      address2,
      city,
      state,
      county,
      zip,
      phone,
      race,
      ethnicity,
      gender,
      dob,
      ecFirstName,
      ecLastName,
      ecPhone,
      ecRelation,
    },
  });
  res.json(user);
});

// // Delete User by ID
// router.delete(':/id', async (req, res) => {
//     const user = await User.findById(req.params.id).select('-password');
//     user.remove();
//     res.json(user);
// });

module.exports = router;
