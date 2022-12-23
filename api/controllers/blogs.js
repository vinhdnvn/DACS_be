const mongoose = require("mongoose");
const { count } = require("../models/blog");
const ObjectID = require("mongodb").ObjectId;
const Blog = require("../models/blog");

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "secret", {
    expiresIn: maxAge,
  });
};

exports.blogs_get_all = (req, res, next) => {
  Blog.find({})
    .then((x) => {
      res.render("blogs.ejs", { x });
    })
    .catch((y) => {
      console.log(y);
    });
};

exports.blogs_get_addblog = (req, res, next) => {
  res.render("addblog.ejs");
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
  const blog = new Blog({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    blogType: req.body.blogType,
    author: req.body.author,
    description: req.body.description,
    content: req.body.content,
    blogImage: req.file.path.replace(/\\/g, "/"),
  });

  blog
    .save()
    .then((blogs) => {
      res.redirect("/blogs");
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
  const blog = req.body._id;
  Blog.findByIdAndDelete(blog, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/blogs");
    }
  });
};

exports.blogs_delete_blogAdmin = (req, res, next) => {
  const blog = req.params.blogId;
  Blog.findByIdAndDelete(blog, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/admin");
    }
  });
};

exports.get_blog_profile = (req, res, next) => {
  Blog.find({ id: ObjectID(req.params.userId) })
    .then((x) => {
      res.render("blogprofile.ejs", { x });
    })
    .catch((y) => {
      console.log(y);
    });
};

exports.blogs_getdetail = (req, res, next) => {
  var myId = req.params.blogId;
  Blog.findById({ _id: ObjectID(myId) })
    .then((x) => {
      res.render("blogById.ejs", { x });
    })
    .catch((y) => {
      console.log(y);
    });
};

// user update blog
exports.blogs_getUpdate = (req, res, next) => {
  Blog.findByIdAndUpdate(
    { _id: ObjectID(req.params.blogId) },
    req.body,
    (err, blog) => {
      if (err) {
        console.log(err);
      } else {
        res.render("editblog", { blog: blog });
      }
    }
  );
};

exports.blogs_userUpdate = (req, res) => {
  Blog.findByIdAndUpdate(
    { _id: ObjectID(req.params.blogId) },
    req.body,
    (err, blog) => {
      if (err) {
        console.log(err);
      } else {
        res.render("/blogs");
      }
    }
  );
};
