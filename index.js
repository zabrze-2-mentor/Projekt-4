const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
//Middlewares
app.use(bodyParser.json())
app.use(cors())

//Import Routes
const home = require('./routes/home')
const example = require('./routes/example')
const users = require('./routes/users')

//Routes
app.use('/', home)
app.use('/api/example', example)
app.use('/api/users', users)


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