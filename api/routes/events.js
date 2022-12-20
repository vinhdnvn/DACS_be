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
    console.log("errorrrrrrr");
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
router.get("/events", EventController.events_get_all);
// new events

router.get("/addevent", EventController.events_get_addEvent);
router.post(
  "/addevent",
  upload.single("eventImage"),
  EventController.events_post_addEvent
);

router.get("/events/:eventId", EventController.events_get_event);

router.delete("/events/:eventId", EventController.events_delete_event);

router.patch("/events/:eventId", EventController.events_update_event);
module.exports = router;
