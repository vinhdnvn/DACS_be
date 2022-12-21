const express = require("express");
const router = express.Router();

const multer = require("multer");
const { requireAuth, checkUser } = require("../middleware/authMiddleware");

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

router.get(
  "/addevent",
  requireAuth,
  checkUser,
  EventController.events_get_addEvent
);
router.post(
  "/addevent",
  upload.single("eventImage"),
  EventController.events_post_addEvent
);

router.get("/events/:eventId", EventController.events_get_event);

router.post("/events/delete", EventController.events_delete_event);
// update
router.get("/events/:eventId/edit", EventController.events_getupdate_event);
router.post("/events/:eventId/edit", EventController.events_update_event);
module.exports = router;
