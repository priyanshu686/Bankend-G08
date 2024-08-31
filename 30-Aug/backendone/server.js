const express = require('express')
const app = express()

app.get("/get" ,(req,res)=>{
    res.send("Its a get request")
})

app.listen(8000,()=>{
    console.log("Server start at Port 8000");
})
