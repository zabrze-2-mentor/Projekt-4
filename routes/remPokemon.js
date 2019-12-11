const express = require('express')
const router = express.Router()
const Pokemon = require('../models/pokemon')

router.delete('/:id', async(req, res) => {
    const remPokemon = await Pokemon.findByIdAndRemove(req.params.id);
    if(!remPokemon) return res.status(404).send('Brak podanego pokemona.');
    res.send(remPokemon);
});

module.exports = router