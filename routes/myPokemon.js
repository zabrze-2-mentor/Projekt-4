const express = require('express')
const router = express.Router()
const Pokemon = require('../models/pokemon')
const User = require('../models/user')

// const userId = "5df20d768af3ee2e0c10a1f3";

//GET pokemon names
router.get('/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id)
        try {
            let pokemony = [];
            Pokemon.find({
                '_id': { $in: user.pokeCollection}
            }, function(err, docs){
                let poke = [];
                docs.forEach(element =>{
poke.push(element.name);
                })
                 console.log(poke);
                 res.json(poke);
            });

             
        } catch (error) {
            res.json({
                message: error
            })
        }
      
    } catch (error) {
        res.json({
            message: error
        })
    }
})
module.exports = router