var mongoose = require('mongoose');
const UserScehma = require('../models/user');
const genrate_token = require('../helper/genrate_token')

require('dotenv').config()


class AuthService {
    static async login(user,userdata) {
        try {
     
            if(!userdata){
             
    return  {status:false,data:auth_message.auth_failed_message.auth_user_not_found}

            }
 const token = await genrate_token.genrate_login_token(userdata)


let obj={
    data: userdata,
    token 
}

console.log("login",obj)

          
return {data:obj,status:true}
        
        } catch (err) {
         
            return { status: false, error: 'An error occurred during login' };
         

        }
    }

}


module.exports = AuthService;