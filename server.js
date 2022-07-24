const express =  require('express');
const mongoose = require('mongoose');
const http = require('http');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/uploads', express.static('uploads'));

app.use(require('./routes/routes'));
const server = http.createServer(app);

server.listen(3000,() =>{
    console.log("Server Listening to port 3000")
});


const connectDatabase = async()=>{
    try {
        mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true
        });
        console.log("Database Connected Successfully..!")
    } catch (err) {
        console.log(err)
    }
};
connectDatabase();