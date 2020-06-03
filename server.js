const express = require('express') ;
const app = express() ;

app.get('/', (req,res)=> {
    res.send('Hello There !!')
})

app.listen(4444, (req,res)=> {
    console.log("Server started on http://localhost:4444")
})