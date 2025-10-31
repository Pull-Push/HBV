import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products, boxSizes, bagSizes, grindTypes }from '../data/products'
import '../ProductDetail.css';


function ProductDetail(){
    const { id } = useParams(); //gets the id from the URL
    const navigate = useNavigate()

    //find the product
    const product = products.find(p => p.id === parseInt(id))

    //State for user selections
    const [format, setFormat] = useState('pods') //sets pods as default
    const [selectedSize, setSelectedSize] = useState(null)
    const [selectedGrind, setSelectedGrind] = useState('whole-bean')

    //error handling
    if(!product){
        return(
            <div className="prod-not-found">
                <h1>Product not found</h1>
                <button className="btn btn-primary" onClick={()=>navigate('/shop')}>Back to Shop</button>
            </div>
        )
    }

    //Get Sizes based on format
    const availableSizes = format === 'pods' ? boxSizes : bagSizes

    //Get final price
    const finalPrice = selectedSize ? selectedSize.price : null

    return(
        <div className="product-deatil-page">
            <div className="product-detail-container">
                
                <div className="product-image-section">
                    <img src={product.image} alt={product.name} />
                </div>

                <div className="product-info-section">
                    <span className="product-class-badge">{product.class}</span>
                    <h1>{product.name}</h1>
                    <p className="tagline">{product.tagline}</p>

                    <div className="product-specs">
                        <div className="spec">
                            <strong>Roast:</strong> {product.roastLevel}
                        </div>
                        <div className="spec">
                            <strong>Caffeine:</strong> {product.caffeineLevel}
                        </div>
                    </div>

                    <div className="flavor-notes">
                        <strong>Flavor Notes:</strong>
                        <div className="notes-list">
                            {product.flavorNotes.map((note, index) =>(
                                <span key={index} className="note">{note}</span>
                            ))}
                        </div>
                    </div>
                        
                        <p className="description">{product.description}</p>

                        <div className="format-selection">
                            <h3>Choose Format</h3>
                            <div className="format-buttons">
                                <button className={`format-btn ${format === 'pods' ? 'active' : ''}`} 
                                onClick={()=>{
                                    setFormat('pods') 
                                    setSelectedSize(null)
                                }}
                                >
                                    Pod Boxes
                                </button>
                                <button className={`format-btn ${format === 'bags' ? 'active' : ''}`}
                                onClick={() =>{
                                    setFormat('bags')
                                    setSelectedSize(null)
                                }}
                                >
                                Coffee Bags
                                </button>
                            </div>
                        </div>


                        <div className="size-selection">
                            <h3>Select Size:</h3>
                            <div className="size-options">
                                {availableSizes.map((size) =>(
                                    <div key={size.id} className={`size-option ${selectedSize?.id === size.id ? `selected` : ''}`}
                                    onClick={()=>setSelectedSize(size)}
                                    >
                                    {format === 'pods' && size.image && (
                                        <img src={size.image} alt={size.name} className="size-image" />
                                    )}
                                    <div className="size-info">
                                        <strong>{size.name}</strong>
                                        <span className="size-detail">
                                            {format === 'pods' ? `${size.pods} pods` : size.weight}
                                        </span>
                                        <span className="size-price">${size.price}</span>
                                    </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {format === 'bags' && (
                            <div className="grind-selection">
                                <h3>Grind Type:</h3>
                                <div className="grind-options">
                                    {grindTypes.map((grind) =>(
                                        <label key={grind.id} className="grind-option">
                                            <input type="radio" name="grind" 
                                            value={grind.id} 
                                            checked={selectedGrind === grind.id} 
                                            onChange={(e)=> setSelectedGrind(e.target.value)}
                                            />
                                            <div className="grind-info">
                                                <strong>{grind.name}</strong>
                                                <span>{grind.description}</span>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="add-to-cart-section">
                            {finalPrice && (
                                <div className="final-price">
                                    <span>Total:</span>
                                    <strong>${finalPrice}</strong>
                                </div>
                            )}
                            <button className="btn add-to-cart" disabled={!selectedSize}>{selectedSize ? 'Add to Cart' : 'Select a Size'}</button>
                        </div>
                </div>
            </div>
        </div>       
    )
}

export default ProductDetail;