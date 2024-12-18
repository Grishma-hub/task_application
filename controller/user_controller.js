const UserService = require('../service/user_service');

class UserController {
    static async createUser(req, res) {
        try {
           
            const user = await UserService.createUser(req.body);
           
            res.status(201).json(user);
        } catch (error) {
            res.json({ status:false, data: error.message });
        }
    }
}

module.exports = UserController
