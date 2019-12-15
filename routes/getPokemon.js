const express = require('express')
const router = express.Router()
const Pokemon = require('../models/pokemon')

//GET pokemons
router.get('/', async (req, res) => {
    try {
        const pokemons = await Pokemon.find()
        res.json(pokemons)
    } catch (error) {
        res.json({
            message: error
        })
    }
})
//GET pokemon
router.get('/:id', async (req, res) => {
    try {
        const pokemon = await Pokemon.findById(req.params.id)
        res.json(pokemon)
    } catch (error) {
        res.json({
            message: error
        })
    }
})
module.exports = router