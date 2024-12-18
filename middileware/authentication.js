const jwt = require('jsonwebtoken');

require('dotenv').config()

module.exports = async (req, res, next) => {
    const token = req.header('Authorization');
console.log(token,"token")
   
    if (!token) {
        return res.json({ status:false,data: 'Access denied. No token provided.' });
    }

    try {
      console.log("decoded",process.env.TOKEN_KEY,token)
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    console.log(decoded,"decoded")
        req.user = decoded;


        next();
    } catch (err) {
    
        if (err.name === 'TokenExpiredError') {
            return res.json({
              status: 498,
              data: 'JWT expired'
            });
          }else{
            res.json({ status:false, data: err.message });
          }
       
    }
};