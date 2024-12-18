const TaskService = require('../service/task_service');

class TaskController {
    static async createTask(req, res) {
        try {
           
            const user = await TaskService.createtask(req.body);
           
            res.status(201).json(user);
        } catch (error) {
            res.json({ status:false, data: error.message });
        }
    }

    static async updateTask(req, res) {
        try {
           
            const user = await TaskService.updatetask(req.body);
           
            res.status(201).json(user);
        } catch (error) {
            res.json({ status:false, data: error.message });
        }
    }

    static async deleteTask(req, res) {
        try {
           
            const user = await TaskService.deletetask(req.body);
           
            res.status(201).json(user);
        } catch (error) {
            res.json({ status:false, data: error.message });
        }
    }

    static async tasklistbyuser(req, res) {
        try {
           
            const user = await TaskService.tasklistbyuserid(req.body);
           
            res.status(201).json(user);
        } catch (error) {
            res.json({ status:false, data: error.message });
        }
    }


    static async tasklistbyuser(req, res) {
        try {
           
            const user = await TaskService.tasklistbyuserid(req.body);
           
            res.status(201).json(user);
        } catch (error) {
            res.json({ status:false, data: error.message });
        }
    }


    static async taskdetailbytaskid(req, res) {
        try {
           
            const user = await TaskService.taskdetailbytaskid(req.body);
           
            res.status(201).json(user);
        } catch (error) {
            res.json({ status:false, data: error.message });
        }
    }
}

module.exports = TaskController