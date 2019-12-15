const express = require('express')
const mongoose=require('mongoose')

const MessageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

module.exports=mongoose.model('Message',MessageSchema);