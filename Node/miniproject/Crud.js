
const con = require('./connection1');
const get = require('./get');
const getbyid=require('./getbyid');
const post = require('./post');
const put = require('./put');
const del=require('./Delete');
const Logger = require('./Logger');
const DBLogger = require('./DBLogger');
const Authenticate = require('./Authenticate');
const express = require('express');
const fs =  require('fs');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(Logger);
app.use(DBLogger);
// app.use(Authenticate);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const mysql = require('mysql');

// const { createConnection } = require('net');

app.get('/users',get);
app.get('/users/:name',getbyid);
app.post('/users',post);
app.put('/users/:id',put);
app.delete('/users/:id',del);


app.listen(3000,function(){
    console.log('Server Started');
})