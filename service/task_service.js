var mongoose = require('mongoose');
const Taskmodel = require('../models/task');
const {objectID } = require('../helper/object_id')




class AuthService {
    static async createtask(data) {
        try {
let obj={
    title:data.title,
    description:data.description,
    user:data.userid
}
            let taskschema =  new Taskmodel(obj)

           let task= await taskschema.save()
    return {data:task,status:true}
        
        } catch (err) {
         
            return err
          

        }
    }

    static async updatetask(data) {
        try {

         
console.log(data.taskid,"data.taskid")
           let task= await Taskmodel.updateOne({_id:data.taskid},{
            $set:data
             
           })
           if (task.acknowledged && task.modifiedCount > 0) {
        
            return {status:true,data:"Sucessfully Updated"}
    
    
        }else{
          
            return {data:"Not Updated",status:false}
        }
 
        
        } catch (err) {
         
          
            return err

        }
    }

    static async deletetask(data) {
        try {

         

           let task= await Taskmodel.updateOne({_id:data.taskid},{
            $set:{
                isdelete:true
            }
             
           })

           if (task.acknowledged && task.modifiedCount > 0) {
        
            return {status:true,data:"Sucessfully Deleted "}
    
    
        }else{
          
            return {data:"Not Delete",status:false}
        }

        
        } catch (err) {
         
          
            return  err

        }
    }

    static async tasklistbyuserid(data) {
        try {

         

       let task = await Taskmodel.find({user:data.userid,isdelete:false}).populate('user')

if(Array.isArray(task)&&task.length==0){
    return {data:"You have no any task ",status:false }
}else{
    return {data:task,status:true}
}
             
        
  
        
        } catch (err) {
         
          
            return err

        }
    }

    static async taskdetailbytaskid(data) {
        try {
            console.log(data.taskid,"data.taskid")
         

       let task = await Taskmodel.findOne({_id:objectID(data.taskid)}).populate('user')

if(!task){
    return {data:"Task  Not Found ",status:false}
}else{
    return {data:task,status:true}
}
             
        
  
        
        } catch (err) {
         
          console.log(err)
            return  err

        }
    }





}


module.exports = AuthService;