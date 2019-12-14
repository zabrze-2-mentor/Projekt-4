const express = require('express')
const router = express.Router()
const Pokemon = require('../models/pokemon')

router.patch('/:id', async (req, res) =>{
    try{
        const pokemon=await Pokemon.findByIdAndUpdate({
            _id: req.params.id
        }, {
            $set: {
                name: req.body.name,
                type: req.body.type,
                species:req.body.species
            }
        })
        res.json(pokemon)
    }
    catch(error){
        res.send(error)
    }
})

module.exports=router;