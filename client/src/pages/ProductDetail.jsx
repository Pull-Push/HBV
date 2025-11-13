import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct, getBoxSizes, getBagSizes, getGrindTypes } from "../services/api";
// import { products, boxSizes, bagSizes, grindTypes }from '../data/products' //LOCAL DATA FILE
import { useCart } from "../context/useCart";

import '../ProductDetail.css';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5050'

function ProductDetail(){
    const { addToCart } = useCart()
    const { id } = useParams(); //gets the id from the URL
    const navigate = useNavigate()

    //STATE
    const [ product, setProduct ] = useState(null)
    const [ boxSizes, setBoxSizes ] = useState([])
    const [ bagSizes, setBagSizes ] = useState([])
    const [ grindTypes, setGrindTypes ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)
    const [ format, setFormat ] = useState('pods')
    const [ selectedSize, setSelectedSize ] = useState(null)
    const [ selectedGrind, setSelectedGrind ] = useState('whole-bean')

    //FETCH DATA
    useEffect(() =>{
        async function fetchData() {
            try {
                const [productData, boxData, bagData, grindData ] = await Promise.all([
                    getProduct(id),
                    getBoxSizes(),
                    getBagSizes(),
                    getGrindTypes()
                ])
                
                setProduct(productData)
                setBoxSizes(boxData)
                setBagSizes(bagData)
                setGrindTypes(grindData)
                setLoading(false)
            } catch (error) {
                setError(error.message)
                setLoading(false)
            }
        }
        fetchData()
    },[id])

    if(loading){
        return(
            <div className='deatil-page'>
                <div className='loading'>
                    <h2>Loading Product...</h2>
                </div>
            </div>
        )
    }

    if(error || !product){
        return(
            <div className='detail-page'>
                <div className='error'>
                    <h2>Error Loading Products</h2>
                    <p>{error}</p>
                    <button className="btn btn-primary" onClick={() => navigate('/shop')}>Back to Shop</button>
                </div>
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
                    <img src={`${API_BASE_URL}${product.image_url}`} alt={product.name} />
                </div>

                <div className="product-info-section">
                    <span className="product-class-badge">{product.class}</span>
                    <h1>{product.name}</h1>
                    <p className="tagline">{product.tagline}</p>

                    <div className="product-specs">
                        <div className="spec">
                            <strong>Roast:</strong> {product.roast_level}
                        </div>
                        <div className="spec">
                            <strong>Caffeine:</strong> {product.caffeine_level}
                        </div>
                    </div>

                    <div className="flavor-notes">
                        <strong>Flavor Notes:</strong>
                        <div className="notes-list">
                            {product.flavor_notes.map((note, index) =>(
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
                                    {format === 'pods' && size.image_url && (
                                        <img src={`${API_BASE_URL}${size.image_url}`} alt={size.name} className="size-image" />
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
                            <button className="btn add-to-cart" disabled={!selectedSize}
                            onClick={() =>{
                                if(selectedSize) {
                                    addToCart(product, selectedSize, format=== 'bags' ? selectedGrind:null)
                                    alert('Added to Cart!')
                                }
                            }}
                                >{selectedSize ? 'Add to Cart' : 'Select a Size'}</button>
                        </div>
                </div>
            </div>
        </div>       
    )
}

export default ProductDetail;