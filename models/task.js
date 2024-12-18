
var mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { type } = require('os');

var TaskSchema = mongoose.Schema({  
    title: {
       
        type: String
    },

    user:{
        type: mongoose.Schema.Types.ObjectId, ref: "Users"
    },

    description: {
       
        type: String
    },
    isdelete:{
        type:Boolean,
        default: false
    },
 createdAt: {
       
        type: Date,
        default: new Date()
    },
    updatedAt: {
       
        type: Date,
        default: new Date()
    },
  status:{
        type:String,
        enum:['pending','complete'],
        default : 'pending'
    },

});





const Taskmodel = mongoose.model('Task', TaskSchema)

module.exports = Taskmodel