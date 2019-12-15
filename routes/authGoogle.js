const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/', 
    passport.authenticate('google', {
    scope: ['profile']
    })
);


router.get('/return', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    }
);

module.exports=router;
