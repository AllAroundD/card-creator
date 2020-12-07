const router = require('express').Router();
const decksController = require('../../controllers/decksController');

// Matches with "/api/decks"
router.route('/')
    .get(decksController.findAll)
    .post(decksController.create);

// Matches with "/api/decks/:id"
router
    .route('/:id')
    .get(decksController.findById)
    .put(decksController.update)
    .delete(decksController.remove);

module.exports = router;
