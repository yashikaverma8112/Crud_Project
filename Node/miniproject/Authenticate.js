
const Authenticate =(req,res,next)=>{
    if(req.headers.token == 'ABC'){
        next();
    }
    else{
       
        res.status(401).send('You are not Authenticated');
    }
    
}
module.exports=Authenticate;