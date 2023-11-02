const router = require('express').Router();
const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

// /api/users we consolidate all the requests to a single endpoint in this line
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:userId we consolidate all the requests to a single endpoint in this line
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/users/:userId/friends/:friendId we consolidate all the requests to a single endpoint in this line
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);


module.exports = router;