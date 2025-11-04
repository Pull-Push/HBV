import { useState } from "react"
import { CartContext } from "./cartContext";
//provider component

export function CartProvider({children}){
    const [cartItems, setCartItems] = useState([]);

    //add item to cart
    const addToCart = (product, size, grindType = null) =>{
        const cartItem ={
            id: `${product.id}-${size.id}-${grindType || 'none'}`, //unique ID
            productId: product.id,
            name:product.name,
            class:product.class,
            image:product.image,
            size: size,
            grindType:grindType,
            price:size.price,
            quantity: 1
        }

        setCartItems(prev =>{
            //check if item already exists
            const existingItem = prev.find(item => item.id === cartItem.id)

            if(existingItem){
                //add to quantity
                return prev.map(item =>
                    item.id === cartItem.id ? {...item, quantity: item.quantity + 1}
                    : item
                )
            }else{
                //add new item
                return [...prev, cartItem]
            }
            })
        }
        //remove from cart
        const removeFromCart = (itemId) =>{
            setCartItems(prev => prev.filter(item => item.id !== itemId))
        }

        //update quantitiy
        const updateQuantity = (itemId, newQuantity) =>{
            console.log('updating item:', itemId, 'to quantity:', newQuantity)
            console.log('current cart items', cartItems)
            if(newQuantity <= 0){
                removeFromCart(itemId)
            }else{
                setCartItems(prev =>
                    prev.map(item =>{
                        console.log('checking item:', item.id, 'against', itemId, 'match', item.id === itemId)
                        return item.id === itemId? { ...item, quantity:newQuantity } : item
                    }
                    )
                )
            }
        }


        //clear cart
        const clearCart = () =>{
            setCartItems([])
        }

        //calculate totals
        const cartTotal = cartItems.reduce(
            (total, item) => total + item.price * item.quantity, 
            0
        )

        const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0)

        const value ={
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartTotal,
            cartCount
        }

        return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}