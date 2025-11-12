const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5050

//middleware
const allowedOrigins = [
    'http://localhost:5173',
    process.env.FRONTEND_URL
]

app.use(cors({
    origin: function(origin, callback) {
        //Allows requests with no origin = mobile apps, postman
        if(!origin) return callback(null, true)

        if(allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        }else{
            callback(new Error('Not Allowed By CORS'))
        }
    },
    credentials: true
}))
app.use(express.json())

//SERVE IMAGES FROM PUBLIC DIRECTORY
app.use('/images', express.static(path.join(__dirname, 'public/images')))


//test route
app.get('/api', (req, res) =>{
    res.json({message: 'HERO BREW API IS RUNNING!'})
})

//Import Routes\
const productsRouter = require('./routes/products')
app.use('/api/products', productsRouter)

//error handling
app.use((err, req, res, next) =>{
    console.error(err.stack)
    res.status(500).json({error: 'SOMETHING WENT WRONG'})
})

//START SERVER
app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON localhost:${PORT}`)
})