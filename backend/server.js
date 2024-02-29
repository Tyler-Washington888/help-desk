const express = require('express')
const port = process.env.PORT || 5000
let cors = require("cors");


const app = express() 


app.use(cors());
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

 

app.listen(port, () => 
    console.log(`Server listening on port ${port}`)
)