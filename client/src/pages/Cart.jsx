import { useCart } from "../context/useCart";
import { useNavigate } from "react-router-dom";
import '../Cart.css';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5050'


function Cart(){
    const navigate = useNavigate();
    const {cartItems, updateQuantity, removeFromCart, clearCart, cartTotal, cartCount} = useCart()
    // console.log('Cart Items:', cartItems)


    if(cartItems.length === 0){
        return(
            <div className="cart-page-empty">
                <div className="empty-cart">
                    <h1>Your Cart is Empty</h1>
                    <p>Add some heroic brews to fuel your adventure!</p>
                    <button className="btn btn-primary" onClick={()=> navigate('/shop')}>Shop Coffee</button>
                </div>
            </div>
        )
    }

    return(
        <div className="cart-page">
            <div className="cart-container">
                <div className="cart-header">
                    <h1>Your Quest Supplies</h1>
                    <button className="btn-clear" onClick={clearCart}>Clear Cart</button>
                </div>
                <div className="cart-items">
                    {cartItems.map((item) =>(
                        <div key={item.id} className="cart-item">
                            <img src={`${API_BASE_URL}${item.image}`} alt={item.name} />
                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <p className="item-class">{item.class} Class</p>
                                <p className="item-size">
                                    {item.size.name}
                                    {item.size.pods && `(${item.size.pods} pods)`}
                                    {item.size.weight && `(${item.size.weight})`}
                                </p>
                                {item.grindType && (
                                    <p className="item-grind">
                                        Grind: {item.grindType === 'whole-bean' ? 'Whole Bean' : 'Ground'}
                                    </p>
                                )}
                            </div>
                            <div className="item-quantity">
                                <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}> - </button>
                                <span className="qty-display">{item.quantity}</span>
                                <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1 )}> + </button>
                            </div>

                            <div className="item-price">
                                <p className="unit-price">${item.price} each</p>
                                <p className="total-price">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>

                            <button className="btn-remove" onClick={() => removeFromCart(item.id)}> X </button>
                        </div>
                    ))}
                </div>

                <div className="cart-summary">
                    <div className="summary-row">
                        <span>Items:</span>
                        <span>{cartCount}</span>
                    </div>
                    <div className="summary-row">
                        <span>Subtotal:</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="summary-row total">
                        <span>Total:</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>

                    <button className="btn-checkout">
                        Proceed to Checkout
                    </button>

                    <button className="btn-continue" onClick={()=> navigate('/shop')}>Continue Shopping</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;