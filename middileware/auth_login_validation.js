const bcrypt = require('bcryptjs');
const User = require('../models/user'); 

module.exports = async (req, res, next) => {
    const { email, password } = req.body;

    try {
     
      
        const user = await User.findOne({ $or: [{ email: email.toLowerCase() }, { username: email.toLowerCase() }],status:true })
      
        if (!user) {
            return res.json({status:false, error: 'User not found' });
        }
     
        const isPasswordValid = await bcrypt.compare(password, user.password);
     
    

        if (!isPasswordValid) {
            return res.json({status:false, error: 'Invalid password' });
        }

   

     
     

    
      
        req.user = user;
        next();
    } catch (err) {
        console.error(err);
        res.json({ status: false, error: 'An error occurred during login' });
    }
};