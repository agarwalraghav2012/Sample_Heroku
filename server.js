const express = require('express') ;
const app = express() ;

const PORT = process.env.PORT || 4444 ;

app.get('/', (req,res)=> {
    res.send('Hello There !!')
})

app.listen(PORT, (req,res)=> {
    console.log(`Server started on http://localhost:${PORT}`)
})