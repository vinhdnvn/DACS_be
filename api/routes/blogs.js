const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const multer = require("multer");
const Blog = require("../models/blog");
const User = require("../models/user");
// controllers
const BlogController = require("../controllers/blogs");

// support upload file

const storage = multer.diskStorage({
  // notice you are calling the multer.diskStorage() method here, not multer()
  destination: function (req, file, cb) {
    cb(null, "./uploads/blogs");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

// router
router.get("/", BlogController.blogs_get_all);

router.get("/:blogId", BlogController.blogs_get_blog);

router.post("/", upload.single("blogImage"), BlogController.blogs_post_blog);

router.patch("/:blogId", BlogController.blogs_update_blog);

router.delete("/:blogId", BlogController.blogs_delete_blog);

module.exports = router;
