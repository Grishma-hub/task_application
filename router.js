const express = require('express')
const path = require('path')
const app = express();

const bodyParser = require('body-parser');


const cors = require('cors');
const userRoutes = require('./routes/user_route');
const authRoutes = require('./routes/auth_route');
const taskRoutes = require('./routes/task_route')
app.use(cors({ origin: '*' }));
app.use(express.json());

app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, 'dist/task_application')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/task_application/index.html'));
  });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Provide the 'extended' option explicitly

app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/task',taskRoutes)

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
    next();
});





app.get('/',function(req,res){

    res.send('Hello Node welcome back ')

})


module.exports = app