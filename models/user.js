const express = require('express')
const router=express.Router()
const mongoose=require('mongoose')

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userInfo:{
        type:String
    },
    pokeCollection:{
        type:Array
    },
     registerDate:{
        type: Date,
        default: Date.now
    }
})

module.exports=mongoose.model('User',UserSchema)