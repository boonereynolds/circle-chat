var {createUser, showUser, updateUser, deleteUser} = require('../controllers/users_controller.js'),
    express = require('express'),
    router = express.Router()

// /api/users routes:
router.route('/')
  .post(createUser)

// /api/users/:id routes:
router.route('/:id')
  .get(showUser)
  .patch(updateUser)
  .delete(deleteUser)

// exports module
module.exports = router
