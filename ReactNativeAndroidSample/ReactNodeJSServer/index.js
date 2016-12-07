var express=require("express")();
var bodyparser=require("body-parser");


express.use(bodyparser.json());


express.get('/init',function(req,res){
	return res.status(200).send({message:"Tada"})
})

express.post('/v1/user',function(req,res) {
	console.log(req.body);
	if(req.body.username=="waseem"&&req.body.password=="waseem"){
		return res.status(200).send({message:"Authenticated User"})
	}
	else{
		return res.status(401).send({message:"Unauthorized user object"});
	}
})

express.listen(4131);