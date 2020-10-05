const mysql = require("mysql");

//create connection 
let connection = mysql.createConnection({
	host:"192.168.10.10",
	post:3306,
	database:"nma",
	user:"homestead",
	password:"secret",
});

//connect
connection.connect((err)=> {
	if(err){
		throw err
	};
	console.log("Connected!");
	})

	

    
module.exports =connection;

