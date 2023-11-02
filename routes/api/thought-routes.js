const router = require('express').Router();
const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// /api/thoughts we consolidate all the requests to a single endpoint in this line
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtid we consolidate all the requests to a single endpoint in this line
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought).put(updateThought);

// /api/thoughts/:thoughtId/reactions we consolidate all the requests to a single endpoint in this line
router.route("/:thoughtId/reactions").post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId we consolidate all the requests to a single endpoint in this line
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);




module.exports = router;