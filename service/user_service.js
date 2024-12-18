
const mongoose = require('mongoose');
const UserScehma = require('../models/user');
class UserService {
    static async createUser(userData) {
        try{
            console.log("regiser api call")
            const user = new UserScehma(userData);
            return user.save();
        }catch(err){
           
            return err
        }
     
    }

}
module.exports = UserService