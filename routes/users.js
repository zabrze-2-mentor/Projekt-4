const express = require('express')
const router = express.Router()
const User = require('../models/user')

//GET users
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
// POST user
router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        login: req.body.login,
        password: req.body.password,
        userInfo: req.body.userInfo,
        pokeCollection: req.body.pokeCollection,
    })
    try {
        const savedUser = await user.save()
        res.json(savedUser)
    } catch (error) {
        res.json({
            message: error
        })
    }
})
//GET a specific user
router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        res.json(user)
    } catch (error) {
        res.json({
            message: error
        })
    }
})
//DELETE a specific user
router.delete('/:userId', async (req, res) => {
    try {
        const deletedUser = await User.remove({
            _id: req.params.userId
        })
        res.json(user)
    } catch (error) {
        res.json({
            message: error
        })
    }
})
//MODIFY a specific user, Patch for better flow You can only modify one param without others
router.patch('/:userId', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate({
            _id: req.params.userId
        }, {
            $set: {
                name: req.body.name,
                login: req.body.login,
                password: req.body.password,
                userInfo: req.body.userInfo,
                pokeCollection: req.body.pokeCollection,
            }
        })

        res.json(updatedUser)
    } catch (error) {
        res.json({
            message: error
        })
    }
})



module.exports = router