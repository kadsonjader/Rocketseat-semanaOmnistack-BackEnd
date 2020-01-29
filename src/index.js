const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');

const app = express();
const server = http.Server(app);
const { setupWebSocket } = require('./websocket');

setupWebSocket(server);

mongoose.connect('mongodb+srv://Kadson:Jader12@cluster0-fwiuj.mongodb.net/app?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);


server.listen(3333);