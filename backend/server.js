const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

//middleware
app.use(cors())
app.use(express.json())

//test route
app.get('/api', (req, res) =>{
    res.json({message: 'HERO BREW API IS RUNNING!'})
})

//Import Routes\
const productsRouter = requiref('./routes/products')
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