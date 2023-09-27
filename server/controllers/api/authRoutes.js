import { Router } from "express";
import User, { hashPassword, isPasswordCorrect } from "../../models/User.js";
import { HttpError } from "../../utils/errors.js";
import { login, signToken } from "../../utils/auth.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const router = Router();

//retrieve login page
router.post("/login", async (req, res) => {
  // http://localhost:3001/auth/signup
  try {
    if (req.session.loggedIn) {
      throw new HttpError(500, "You are already logged in.");
    }

    const { username, password } = req.body;

    const user = await User.findOne({ username: username });

    if (!user) {
      throw new HttpError(400, "Invalid username/password.");
    }

    if (!(await isPasswordCorrect(password, user.passwordHash))) {
      throw new HttpError(400, "Invalid username/password.");
    }

    // Log in
    login(req, signToken(user.id));

    res.status(200).json({ message: "Login successful!" });
  } catch (err) {
    if (err.status && err.status != 500) {
      res.status(err.status).json({ message: err.message });
      return;
    }

    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

// signup
router.post("/signup", async (req, res) => {
  // http://localhost:3001/auth/signup
  try {
    if (req.session.loggedIn) {
      throw new HttpError(500, "You are already logged in.");
    }

    const { username, password } = req.body;

    if (await User.findOne({ username: username })) {
      throw new HttpError(400, "That username is taken.");
    }

    const user = await User.create({
      username: username,
      passwordHash: await hashPassword(password),
    });

    if (!user) {
      throw new HttpError(500);
    }

    // Log in
    login(req, signToken(user.id));

    res.status(200).json({ message: "Signup successful!" });
  } catch (err) {
    if (err.status && err.status != 500) {
      res.status(err.status).json({ message: err.message });
      return;
    }

    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

router.get("/user", async (req, res) => {
  // http://localhost:3001/auth/signup
  try {
    if (!req.session.loggedIn) {
      res.status(200).json(null);
      return;
    }

    const { data } = jwt.verify(req.session.token, process.env.JWT_SECRET);
    const { id } = data;

    const user = await User.findById(id);

    if (!user) {
      res.status(200).json(null);
      return;
    }

    res.status(200).json({ username: user.username });
  } catch (err) {
    if (err.status && err.status != 500) {
      res.status(err.status).json({ message: err.message });
      return;
    }

    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

router.get("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(200).json({ message: "Logout successful." });
    });
  } else {
    res.status(404).end();
  }
});

export default router;
