const express = require('express')
const router = express.Router()
const User = require('../models/user')


router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.json({
            message: error
        })
    }
})
router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        login: req.body.login,
        password: req.body.password,
        userInfo: req.body.userInfo,
        pokeCollection: req.body.pokeCollection,
    })
    try {
        const savedPost = await user.save()
        res.json(savedPost)
    } catch (error) {
        res.json({
            message: error
        })
    }




})

module.exports = router