const express = require("express");
const app = express();

const port = 8080;

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})

// for handling post request
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/register",(req,res)=>{
    const {user,pass} = req.query;
    res.send(`standard get response ,welcome ${user}`)
    console.log(`standard get response ,welcome ${user}`);
    
})

app.post("/register",(req,res)=>{
    const {user,pass} = req.body;
    res.send(`standard post response ,welcome ${user}`)
    console.log(`standard post response ,welcome ${user}`);
    
})