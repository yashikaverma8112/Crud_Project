const Logger = (req,res,next)=>{
    console.log('Request Arrival');
    next();
}
module.exports=Logger;