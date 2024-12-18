
var mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { type } = require('os');

// : username, email, and password. 
var UsersSchema = mongoose.Schema({
    username: {
        immutable: true,
        type: String
    },
 
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        immutable: true,
        validate: {
            validator: validator.isEmail,
            message: 'Invalid email address'
        }
    },

   
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters long'],
        validate: {
            validator: function(value) {
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value);
            },
            message: 'Password must contain at least one uppercase letter, one lowercase letter, and one digit'
        }
    },
     token: {
        type: String
    },

    status:{
        type:Boolean,
        default : true
    },

 
  
    created_at: { type: Date, default: new Date() },

 

   
 
  
   


 

});










UsersSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});


const UserScehma = mongoose.model('Users', UsersSchema)
UserScehma.init()
module.exports = UserScehma