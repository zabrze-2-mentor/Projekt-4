const express = require('express')
const router = express.Router()
const Message = require('../models/message')
const User = require('../models/user')

router.post('/:userId/chat', async (req, res) => {

    const currentUser = await User.findById(req.params.userId);

    const message = new Message({
        name: currentUser.name,
        content: req.body
    });

    try {
        const savedMessage = await message.save()
        res.json(savedMessage)
    } catch (error) {
        res.json({
            message: error
        })
    }
});

router.get('/:userId/chat', (req, res) => {
    Message.find({},(err, messages)=> {
      res.send(messages);
    })
  });