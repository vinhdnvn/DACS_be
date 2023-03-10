const express = require("express");
const router = express.Router();
const { requireAuth, checkUser } = require("../middleware/authMiddleware");
const multer = require("multer");

// controllers
const BlogController = require("../controllers/blogs");

// support upload file

const storage = multer.diskStorage({
  // notice you are calling the multer.diskStorage() method here, not multer()
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (
    file.mimetype.includes("image/jfif") ||
    file.mimetype.includes("image/png") ||
    file.mimetype.includes("image/avif") ||
    file.mimetype.includes("image/jpeg") ||
    file.mimetype.includes("image/jpg")
  ) {
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
router.get("/blogs", BlogController.blogs_get_all);

router.get("/addblog", BlogController.blogs_get_addblog);

router.post(
  "/addblog",
  upload.single("blogImage"),
  BlogController.blogs_post_blog
);

// router.patch("/blogs/:blogId", BlogController.blogs_update_blog);
router.get("/blogs/update/:blogId", BlogController.blogs_getUpdate);
router.post("/blogs/update/:blogId", BlogController.blogs_userUpdate);

router.post("/blogs/delete", BlogController.blogs_delete_blog);

router.post(
  "/blogs/admin/delete/:blogId",
  BlogController.blogs_delete_blogAdmin
);

//detail blog
router.get("/profile/:blogId", BlogController.blogs_getdetail);

// profile user blog
router.get(
  "/blogs/:userId",
  requireAuth,
  checkUser,
  BlogController.get_blog_profile
);

module.exports = router;
