const mongoose = require("mongoose");
const Blog = require("../models/blog");
const User = require("../models/user");

exports.blogs_get_all = (req, res, next) => {
  Blog.find()
    .select("user _id description")
    .populate("user", "email")
    .exec()
    .then((docs) => {
      return res.status(200).json({
        count: docs.length,
        blogs: docs.map((doc) => {
          return {
            _id: doc._id,
            description: doc.description,
            user: doc.user,
          };
        }),
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        error: err,
      });
    });
};

exports.blogs_get_blog = (req, res, next) => {
  Blog.findById(req.params.blogId)
    .populate("user")
    .exec()
    .then((blog) => {
      if (!blog) {
        return res.status(404).json({
          message: "Blog not found",
        });
      }
      res.status(200).json({
        blog: blog,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

exports.blogs_post_blog = (req, res, next) => {
  User.findById(req.body.userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }
      const blog = new Blog({
        _id: new mongoose.Types.ObjectId(),
        user: req.body.userId,
        description: req.body.description,
        content: req.body.content,
        blogImage: req.file.path.replace(/\\/g, "/").substring("public".length),
      });
      return blog.save();
    })
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Created blog successfully",
        createdBlog: {
          _id: result._id,
          user: result.user,
          description: result.description,
          content: result.content,
          update: result.update,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

exports.blogs_update_blog = (req, res, next) => {
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Event.update({ _id: id }, { $set: updateOps })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "event updated",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

exports.blogs_delete_blog = (req, res, next) => {
  Blog.remove({
    _id: req.params.blogId,
  })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Deleted succesfully",
      });
    })
    .catch((err) => {
      error: err;
    });
};
