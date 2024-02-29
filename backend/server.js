const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require("./config/db");
const port = process.env.PORT || 5000
let cors = require("cors");

connectDB();


const app = express() 


app.use(cors());
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));


app.use('/tickets', require('./routes/ticketRoutes'))


app.use(errorHandler)
 

app.listen(port, () => 
    console.log(`Server listening on port ${port}`)
)