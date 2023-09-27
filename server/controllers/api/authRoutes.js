import { Router } from "express";
import User, { hashPassword } from "../../models/User.js";
import { HttpError } from "../../utils/errors.js";
import { login, signToken } from "../../utils/auth.js";

const router = Router();

//retrieve login page
router.get("/login", async (req, res) => {
  //localhost:3001/auth/login
  try {
    // If the user is already logged in, redirect the request to another route
    if (req.session.loggedIn) {
      console.log("logged in already");
      res.redirect("/");
      return;
    }
    console.log("not logged in");
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
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

router.get("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.render("login");
    });
  } else {
    res.status(404).end();
  }
});

export default router;
