const express= require("express");
const { loginController, registerController } = require('../controllers/userController')

// router creation
const router = express.Router()

// POST route for the LOGIN 
router.post('/login',loginController)

// POST route for the REGISTER
router.post('/register',registerController)


// exporting routes

module.exports = router;

