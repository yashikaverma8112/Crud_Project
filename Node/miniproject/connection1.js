const mysql2 = require('mysql2');

var con = mysql2.createConnection({
    host: "localhost",
    user: "",
    password: "",
    database: ""
});
con.connect(function (err) {
    if (err) {
        console.log(err);
    }
    
    
    else{
        console.log("Connected");
    }
});
module.exports=con;
