const Event = require("../models/event");
const mongoose = require("mongoose");

exports.events_get_all = (req, res, next) => {
  Event.find()
    .select("_id name locateAt eventType eventImage")
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        events: docs.map((doc) => {
          return {
            _id: doc._id,
            name: doc.name,
            locateAt: doc.locateAt,
            eventType: doc.eventType,
            eventImage: doc.eventImage,
          };
        }),
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });

  // Event.find({})
  //   .then((x) => {
  //     res.render("event.ejs", { x });
  //   })
  //   .catch((y) => {
  //     console.log(y);
  //   });
};

exports.events_post_event = (req, res, next) => {
  const event = new Event({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    update: req.body.update,
    locateAt: req.body.locateAt,
    eventType: req.body.eventType,
    note: req.body.note,
    eventImage: req.file.path.replace(/\\/g, "/"),
  });
  event
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Created Event Successfully",
        createdEvent: {
          name: result.name,
          update: result.update,
          _id: result._id,
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

exports.events_delete_event = (req, res, next) => {
  Event.remove({ _id: req.params.eventId })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "event deleted",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

exports.events_get_event = (req, res, next) => {
  Event.findById(req.params.eventId)
    .select("_id name update locateAt eventType note eventImage")
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

exports.events_update_event = async (req, res, next) => {
  try {
    const id = req.params.eventId;
    const updates = req.body;
    const options = { new: true };

    const result = await Event.findByIdAndUpdate(id, updates, options);

    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
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
