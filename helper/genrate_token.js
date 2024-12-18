const jwt = require('jsonwebtoken');
require('dotenv').config()




const genrate_login_token = (user) => {

    
   let token =  jwt.sign(
        { id: user._id, email: user.email },
        process.env.TOKEN_KEY, 
      
    );
    return token
   
};



module.exports = {

    genrate_login_token,
   
}