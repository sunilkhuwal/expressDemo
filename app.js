//Initialising the variables related to express, body parser
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//using the  body parser for POST related stuffs
app.use(bodyParser.urlencoded({extended : true}));

//TO view remove the ejs extension from req, res of app
app.set("view engine", "ejs");

//Initial list of friends 
//No database conectivity therefore having a default list
var friends = ["sunil", "ramesh", "kamlesh"];

//Home page
app.get("/", function(req, res){
	res.render("home");
});

//Add a friend
app.post("/addfriend",function(req, res){
	var newFriend = req.body.newFriend;
	friends.push(newFriend);
	res.redirect("friends");
});

//Go to friends page
app.get("/friends", function(req, res){
	res.render("friends", {friends : friends});
});


/*When running the server on cloud9 or any other online editors(codeanywhere)*/
// app.listen(process.env.PORT, process.env.IP, function(){
// 	console.log("Server Started");
// });

//Listen to the port
app.listen(3000,console.log('Example app listening on port 3000!'));