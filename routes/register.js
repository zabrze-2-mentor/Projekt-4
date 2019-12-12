const mongoose=require('mongoose');
const {User, validate}=require('../models/user');
const bcrypt=require('bcrypt');
const _=require('lodash');
const express=require('express');
const router=express.Router();

router.post('/', async(req, res)=>{
    const {error} =validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    let user=await User.findOne({name:req.body.name});
    if (user) return res.status(400).send('User already registered');

    user= new User(_.pick(req.body, ['login', 'name', 'password']))
    const salt=await bcrypt.genSalt(10)
    user.password=await bcrypt.hash(register.password, salt)
        await user.save
        

        res.send(_.pick(user, ['_id','login', 'name']))
})
module.exports=router;