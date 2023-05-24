// const mysql = require('mysql');
const con = require('./connection1');
const get = (req,res) => {
    const SQL = 'Select * from users';
    con.query(SQL,(error,result)=>{
        if(error){
            res.status(500).send('error');
        }
        else{
            res.send(result);
        }
    });
};
module.exports=get;