const Event = require("../models/event");
const mongoose = require("mongoose");
const moment = require("moment");

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "secret", {
    expiresIn: maxAge,
  });
};

exports.events_get_all = (req, res, next) => {
  // Event.find()
  //   .select("_id name locateAt eventType eventImage")
  //   .exec()
  //   .then((docs) => {
  //     const response = {
  //       count: docs.length,
  //       events: docs.map((doc) => {
  //         return {
  //           _id: doc._id,
  //           name: doc.name,
  //           locateAt: doc.locateAt,
  //           eventType: doc.eventType,
  //           eventImage: doc.eventImage,
  //         };
  //       }),
  //     };
  //     res.status(200).json(response);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(500).json({
  //       error: err,
  //     });
  //   });

  Event.find({})
    .populate("postedBy", "email")
    .then((x) => {
      res.render("event.ejs", { x });
      console.log(postedBy.email);
    })
    .catch((y) => {
      console.log(y);
    });
};

exports.events_get_addEvent = (req, res, next) => {
  res.render("addevent");
};

exports.events_post_addEvent = (req, res, next) => {
  // console.log(req.file);

  const event = new Event({
    _id: new mongoose.Types.ObjectId(),
    postedBy: req.body.email,
    name: req.body.name,
    locateAt: req.body.locateAt,
    update: req.body.update,
    eventType: req.body.eventType,
    note: req.body.note,
    eventImage: req.file.path.replace(/\\/g, "/"),
  });
  const token = createToken(event.postedBy._id);
  res.cookies("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
  event
    .save()
    .then((result) => {
      res.status(201).json({ result: event.postedBy._id });
      res.redirect("events");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

exports.events_delete_event = (req, res, next) => {
  const event = req.body._id;
  Event.findByIdAndRemove(event, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/events");
    }
  });
};

exports.events_get_event = (req, res, next) => {
  Event.findById(req.params.eventId)
    .select("_id name update locate type note eventImage")
    .exec()
    .then((doc) => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
          event: doc,
        });
      } else {
        res.status(404).json({ message: "Not valid event" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

exports.events_getupdate_event = (req, res, next) => {
  Event.findOneAndUpdate(
    { _id: req.params.eventId },
    req.body,
    { new: true },
    (err, docs) => {
      if (err) {
        res.status(404).json(err);
      } else {
        res.render("editEvent", { event: docs });
      }
    }
  );
};

exports.events_update_event = async (req, res, next) => {
  Event.findByIdAndUpdate(
    { _id: req.params.eventId },
    req.body,
    (err, docs) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.redirect("events");
      }
    }
  );
  // const updateOps = {};
  // for (const ops of req.body) {
  //   updateOps[ops.propName] = ops.value;
  // }
  // Event.update({ _id: id }, { $set: updateOps })
  //   .exec()
  //   .then((result) => {
  //     res.status(200).json({
  //       message: "Updated event successfully",
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(500).json({
  //       error: err,
  //     });
  //   });
};

// event get all
