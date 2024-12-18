const AuthService = require('../service/auth_service');

class AuthController {
    static async login(req, res) {
        try {
        
            const user = await AuthService.login(req.body,req.user);
           
            res.status(201).json(user);
        } catch (error) {
            // console.log(error,"on error section")
            res.json({ status:false, data: error.message });
        }
    }


  



 
}

module.exports = AuthController;