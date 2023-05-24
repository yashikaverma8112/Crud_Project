
var con = require('./connection1');
const DBLogger = (req,res,next)=>{
    const sql="Insert into student(url,method,remoteAddress) values(?,?,?) ";
    con.query(sql,[req.url, req.method, req.socket.remoteAddress], (error,result)=> {
        
    });
    next();
};
   
   

module.exports=DBLogger;