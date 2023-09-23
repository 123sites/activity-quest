const router = require("express").Router();

const { User } = require("../models");

//retrieve login page
router.get("/login", async (req, res) => {
  //localhost:3001/account/login
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

//retrieve signup page
router.get("/signup", async (req, res) => {
  // http://localhost:3001/account/signup
  try {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      console.log("account logged in already");
      res.redirect("/");
      return;
    }
    console.log("make an account");
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
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

module.exports = router;
