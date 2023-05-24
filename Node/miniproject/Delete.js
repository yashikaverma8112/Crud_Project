const con=require('./connection1');
const Delete=(req,res)=>{
      const id =req.params.id;
      const{name,email,password}=req.body;
      const sql='DELETE FROM users where id=?';
        con.query(sql, id, (error, result) => {
        if(error) {
          res.status(500).send('error');
        }
        else{
           
           res.send(result);
        }
      })};
      module.exports=Delete;   
   