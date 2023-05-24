
const con = require('./connection1');
const getbyid = (req,res) => {
    // const id =req.params.id;
    const name =req.params.name;
    const SQL = 'Select * from users where name=?';
    con.query(SQL,name,(error,result)=>{
        if(error){
            res.status(500).send('error');
        }
        else if(result.length==0){
            res.send("Data Doesnot exist");
        }
        else{
            res.send(result);
        }
    });
};
module.exports=getbyid;