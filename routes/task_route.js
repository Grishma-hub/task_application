const express = require('express');
const TaskController = require('../controller/task_controller')
const requiredFieldsMiddleware = require('../middileware/required_field_middleware');
const authMiddleware = require('../middileware/authentication');
const router = express.Router()




router.post('/create_task',authMiddleware,requiredFieldsMiddleware(['title', 'description','status']), TaskController.createTask);
router.post('/tasklist',authMiddleware,requiredFieldsMiddleware(['userid']), TaskController.tasklistbyuser);
router.post('/update_task',authMiddleware,requiredFieldsMiddleware(['taskid']), TaskController.updateTask);
router.post('/delete_task',authMiddleware,requiredFieldsMiddleware(['taskid']), TaskController.deleteTask);
router.post('/taskdetail',authMiddleware,requiredFieldsMiddleware(['taskid']), TaskController.taskdetailbytaskid);

module.exports = router;


