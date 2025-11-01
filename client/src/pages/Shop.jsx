import { useNavigate } from 'react-router-dom';

import { products } from '../data/products';
import '../Shop.css';

function Shop(){
    const navigate = useNavigate()
    return(
        <div className='shop-page'>
            <div className='shop-header'>
                <h1>Choose Your Class</h1>
                <p>13 unique coffee blends created for every type of hero</p>
            </div>

            <div className='products-grid'>
                {products.map((product) => (
                    <div key={product.id} className='product-card'>
                        <img src={product.image} alt={product.name} />
                    
                        <div className='product-info'>
                            <span className='product-class'>{product.class}</span>
                            <h3>{product.name}</h3>
                            <p className='flavor-notes'>
                                {product.flavorNotes.join(' • ')}
                            </p>
                            <p className='description'>{product.description}</p>

                            <div className='product-footer'>
                                <div className='product-details'>
                                    <span className='roast-level'>{product.roastLevel} Roast</span>
                                    <span className='caffeine-level'>{product.caffeineLevel} Caffeine</span>
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