const express = require("express");
const router = express.Router();

const User = require("../models/user");
// const checkAuth = require("../middleware/check-auth");
const { requireAuth } = require("../middleware/authMiddleware");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

router.get("/", requireAuth, (req, res, next) => {
  User.find({})
    .then((x) => {
      res.render("user.ejs", { x });
      console.log(x);
    })
    .catch((y) => {
      console.log(y);
    });
});

router.post("/signup", (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Mail already existed",
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              name: req.body.name,
              email: req.body.email,
              phone: req.body.phone,
              password: hash,
              role: req.body.role,
            });
            user
              .save()
              .then((result) => {
                console.log(result);
                res.status(201).json({
                  message: " user created",
                });
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({
                  error: err,
                });
              });
          }
        });
      }
    });
});

router.post("/login", (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth failed",
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user[0].email,
              userId: user[0]._id,
            },
            process.env.JWT_KEY,
            {
              expiresIn: "1h",
            }
          );
          return res.status(200).json({
            message: "Auth successful",
            token: token,
          });
        }
        res.status(401).json({
          message: "Auth failed",
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.post("/user/delete/:userId", (req, res, next) => {
  const id = req.params.userId;
  User.findByIdAndDelete(id, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/admin");
    }
  });
});

module.exports = router;
