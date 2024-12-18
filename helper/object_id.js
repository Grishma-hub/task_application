const mongoose = require('mongoose');



const objectID = (data)=>{
return new mongoose.Types.ObjectId(data)
}

module.exports ={
    objectID
}