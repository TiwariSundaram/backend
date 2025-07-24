// const express = require("express");
import express from "express";

const app = express();
console.dir(app);

let port = 8080;

// app.lesten  listen every type of incomming request
app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
})

// app.use method listen every type of request like get, post etc

//  res.send ([body])  =>
                 //  it send the http response ,the body parameter can be buffer obj a string, an object, an array
                // when the parameter is an array or object , express responds with json representation
                // when the parameter is string the methods sends the content type to "text / html "

                // we can send only one response at same path


// app.use((req,res)=>{
//     console.log(req);
//     res.send("basic response")
//     console.log("new incomming request / request recieved");
    
// })
// app.use((req,res)=>{
//     res.send({
//         name:"apple",
//         color:"red"
//     })
// })
// app.use ((req,res)=>{
//     let code = "<h1>fruits</h1><ul><li>apple</li><li>orange</li></ul>"
//     res.send(code)
// });

// ++++++++++++++++ app.get(path , callback) =>
                                    //   routes http get request to specified path with the specified callback function
                                    //  path => /(root path) is the defailst path  , the path for witch the middleware / callback function is involed . it can be any of * String representation  ,* path pattern etc  

                                    // callback => when the request occur at the above path then this callback function will execute

app.get("/",(req,res)=>{
    res.send("you connect with the root path")
})
app.get("/apple",(req,res)=>{
    res.send({
        name:"apple",
        color:"red"
    })
})
app.get("/fruits",(req,res)=>{
     let code = "<h1>fruits</h1><ul><li>apple</li><li>orange</li></ul>"
     res.send(code)
})
app.get("*",(req,res)=>{
     
     res.send("page does not exist")
})

app.get("instagram/:username", (req,res)=>{
    let {username}= req.params;
    res.send(`this account becong to @ ${username}`)
})

app.get("/search ",(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send("no search query")
    }
    res.send(`this are the result for ${q}`)
})