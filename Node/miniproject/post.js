const con = require('./connection1');
const post = (req,res)=>{
        const {name,email,password}=req.body;
        const sql='INSERT INTO users(name,email,password) values(?,?,?)';
        con.query(sql,[name,email,password], (error,result)=> {
            if(error) {
                res.status(500).send(error);
            }
            else{
                res.send(result);
    
            }
        });
    };
    module.exports=post;