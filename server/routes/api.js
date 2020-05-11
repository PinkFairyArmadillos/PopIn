const express = require('express');

const eventsController = require('../controllers/eventsControllers');

const router = express.Router();

router.get('/',
  eventsController.getEvents,
  (req, res) => res.status(200).json(res.locals.events),
);

// router for get to /user

router.post('/',
  eventsController.postEvents,
  (req, res) => res.status(200).json({}),
);

module.exports = router;