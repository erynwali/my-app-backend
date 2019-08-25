const express = require('express')
const AddNewProject = require('../model/addnewproject'); 
const routers = new express.Router(); 


routers.post('/addnewproject', (req, res)=>{
    const addnewproject = new AddNewProject(req.body)
    addnewproject.save().then(()=>{
        console.log(req.body)
        res.send(addnewproject)
    }).catch((error)=>{
        console.log(error); 
    })
})

routers.get('/project-details', (req, res) => {
    AddNewProject.find({}).then((addnewproject)=> {
    res.send(addnewproject)
}).catch((e)=> {
    console.log('erroe',e);
    res.status(500).send()
    })
})

routers.get('/project-details/:id', (req, res) =>{
    console.log(req.params.id);
    const _id = req.params.id;
    AddNewProject.findById(_id).then((addnewproject)=>{
    res.send(addnewproject)
    }).catch((e)=> {
        console.log(e);
        
    })
})

routers.patch('/project-details/:id', async (req, res) => {
    const addnewproject = AddNewProject.findByIdAndUpdate(req.params.id, req.body, {new: true,})
    .then(addnewproject=>{
    res.send(addnewproject)
}).catch((e)=>{
    res.status(500).send()
})
})

module.exports = routers; 
