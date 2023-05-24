const con=require('./connection1');
const put=(req,res)=>{
      const {id }=req.params;
      const{name,email,password}=req.body;
      const sql=`UPDATE users set name=? , email=? , password=? where id=?`;
        con.query(sql, [name,email,password,id], (error, result) => {
        if(error) {
          res.status(500).send(error);
        }
        else{
           
           res.send(result);
        }
      })};
      module.exports=put;   