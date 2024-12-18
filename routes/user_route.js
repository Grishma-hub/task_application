const express = require('express');
const UserController = require('../controller/user_controller')
const requiredFieldsMiddleware = require('../middileware/required_field_middleware');

const router = express.Router()




router.post('/register',requiredFieldsMiddleware(['username', 'email','password']), UserController.createUser);

module.exports = router;


