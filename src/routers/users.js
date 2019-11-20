const express = require('express')
const User = require('../model/user')
const routers = new express.Router()


routers.post('/user', async (req,res)=>{
    const user = new User(req.body)
    
    try {
        await user.save()
        res.status(201).send(user)
    } catch(e) {
        res.status(400).send(e)
    }
})

routers.post('/user/login', async (req, res) => {
    try {
        const user = await User.findByCredential(req.body.email, req.body.password)
        res.send(user)
    } catch(e) {
        res.status(400).send(e)
    }
})

module.exports = routers; 