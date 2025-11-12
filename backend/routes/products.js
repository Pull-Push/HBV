const express = require('express')
const router = express.Router()
const pool = require('../db')

//GET ALL PRODUCTS
router.get('/', async (req, res) =>{
    try {
        const result = await pool.query('SELECT * FROM products ORDER BY id')
        res.json(result.rows)
    } catch (err) {
    console.error(err)
    res.status(500).json({error: 'Failed to fetch products'})
    }
})

//GET SINGLE PRODUCT BY ID
router.get('/:id', async(req, res) =>{
    try {
        const { id } = req.params
        const result = await pool.query('SELECT * FROM products WHERE id = $1', [id])

        if(result.rows.length === 0){
            return res.status(500).json({error: 'Product Not Found'})
        }

        res.json(result.rows[0])
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Failed to fetch product'})
        
    }
})