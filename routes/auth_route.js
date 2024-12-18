const express = require('express');
const AuthController = require('../controller/auth_controller')
const  auth_login_validation = require('../middileware/auth_login_validation')
const requiredFieldsMiddleware = require('../middileware/required_field_middleware');
const router = express.Router();


router.post('/login',requiredFieldsMiddleware([ 'email','password']), auth_login_validation,AuthController.login);


module.exports = router;