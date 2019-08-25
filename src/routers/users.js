const express = require('express')
const User = require('../model/user')
const routers = new express.Router()


routers.post('/user', (req,res)=>{
    const user = new User(req.body)
    user.save().then(()=>{
        console.log(req.body)
        res.send(user)
    }).catch((error)=>{
        console.log(error)
    })
})

module.exports = routers; 