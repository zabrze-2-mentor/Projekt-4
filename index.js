const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser=require('body-parser')
//Middlewares
app.use(bodyParser.json())


//Import Routes
const home=require('./routes/home')
const example=require('./routes/example')
const users=require('./routes/users')

//Routes
app.use('/', home)
app.use('/api/example', example)
app.use('/api/users',users)


//connect to DB
mongoose.connect('mongodb+srv://PokemonTrainer:BulbasaurRocks@pokemon-gfjwb.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to DB!!!")
}).catch((error)=>{
    handleError(error);
    console.log("Connection error!!")
})



app.listen(3000);