const express = require('express')

var app = express();
const PORT = 3000

app.get('/',(req,res)=>{
    res.send('hello world ')
})


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})