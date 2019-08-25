const express = require('express');
const cors = require('cors'); 
const app = express();
require('./db/mongo'); 
const User = require('./model/user'); 
const AddNewProject = require('./model/addnewproject'); 
const port = process.env.PORT || 3000 
const userRouter = require('./routers/users')
const addNewProjectRouter = require('./routers/addnewproject')


app.use(express.json())
app.use(cors())


app.use(userRouter); 
app.use(addNewProjectRouter); 


app.listen(port, ()=>{
    console.log('Server is up on port', port)
}) 