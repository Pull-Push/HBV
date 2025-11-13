import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../services/api';
// import { products } from '../data/products';  //LOCAL DATA  FILES
import '../Shop.css';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5050'

function Shop(){
    const [products, setProducts ] = useState([])
    const [loading, setLoading ] = useState(true)
    const [error, setError ] = useState(null)
    const navigate = useNavigate()

    useEffect(() =>{
        async function fetchProducts() {
            try {
                const data = await getProducts()
                setProducts(data)
                setLoading(false)
            } catch (error) {
                setError(error.message)
                setLoading(false)
            }
        }
        fetchProducts()
    },[])

    if(loading){
        return(
            <div className='shop-page'>
                <div className='loading'>
                    <h2>Loading Products...</h2>
                </div>
            </div>
        )
    }

    if(error){
        return(
            <div className='shop-page'>
                <div className='error'>
                    <h2>Error Loading Products</h2>
                    <p>{error}</p>
                </div>
            </div>
        )
    }


    return(
        <div className='shop-page'>
            <div className='shop-header'>
                <h1>Choose Your Class</h1>
                <p>13 unique coffee blends created for every type of hero</p>
            </div>

            <div className='products-grid'>
                {products.map((product) => (
                    <div key={product.id} className='product-card'>
                        <img src={`${API_BASE_URL}${product.image_url}`} alt={product.name} />
                    
                        <div className='product-info'>
                            <span className='product-class'>{product.class}</span>
                            <h3>{product.name}</h3>
                            <p className='flavor-notes'>
                                {product.flavor_notes.join(' • ')}
                            </p>
                            <p className='description'>{product.description}</p>

                            <div className='product-footer'>
                                <div className='product-details'>
                                    <span className='roast-level'>{product.roast_level} Roast</span>
                                    <span className='caffeine-level'>{product.caffeine_level} Caffeine</span>
                                </div>
                                <button className='btn-view' onClick={() => navigate(`/product/${product.id}`) }>View Details</button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Shop;