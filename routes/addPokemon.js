const express = require('express')
const router = express.Router()
const Pokemon = require('../models/pokemon')

router.post('/', async (req, res) => {
    const pokemon = new Pokemon({
        name: req.body.name,
        type: req.body.type,
        species: req.body.species,
        height: req.body.height,
        weight: req.body.weight,
        abilities: req.body.abilities,
        hp: req.body.hp,
        attack: req.body.attack,
        defense: req.body.defense,
        sp_Atk: req.body.sp_Atk,
        sp_Def: req.body.sp_Def,
        speed: req.body.speed
    })
    try {
        const addPokemon = await pokemon.save()
        res.json(addPokemon)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

module.exports = router