const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const passportSetup = require("./config/passport-setup")

//Middlewares
app.use(bodyParser.json())
app.use(cors())

//Import Routes
const home = require('./routes/home')
const example = require('./routes/example')
const users = require('./routes/users')
const pokemon = require('./routes/addPokemon')
const delPokemon = require('./routes/remPokemon')
const patPokemon = require('./routes/patPokemon')
const register=require('./routes/register')
const authGoogle = require('./routes/authGoogle')

//Routes
app.use('/', home)
app.use('/api/example', example)
app.use('/api/users', users)
app.use('/api/addPokemon', pokemon)
app.use('/api/remPokemon', delPokemon)
app.use('/api/patPokemon', patPokemon)
app.use('/api/register', register)
app.use('/auth/google', authGoogle)

//connect to DB
mongoose.connect('mongodb+srv://PokemonTrainer:BulbasaurRocks@pokemon-gfjwb.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   useFindAndModify: false
}).then(() => {
    console.log("Connected to DB!!!")
}).catch((error) => {
    console.log(error);
    handleError(error)
    console.log("Connection error!!")
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`listening port ${port}`)
})

