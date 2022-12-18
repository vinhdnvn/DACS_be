const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");

const Event = require("../models/event");
const EventController = require("../controllers/events");
// setting upload file
const storage = multer.diskStorage({
  // notice you are calling the multer.diskStorage() method here, not multer()
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (
    file.mimetype === "image/jfif" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/avif"
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

// get all events
router.get("/", EventController.events_get_all);
// new events
router.post(
  "/",
  upload.single("eventImage"),
  EventController.events_post_event
);

router.get("/:eventId", EventController.events_get_event);

router.delete("/:eventId", EventController.events_delete_event);

router.patch("/:eventId", EventController.events_update_event);
module.exports = router;
