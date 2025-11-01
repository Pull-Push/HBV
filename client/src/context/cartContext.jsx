import { createContext, useContext, useState } from "react"

//create context
const CartContext = createContext();

//hook to use the cart
export function useCart(){
    const context = useContext(CartContext)
    if(!context){
        throw new Error('useCart must be used within CartProvider')
    }
    return context
}

//provider component

export function CartProvider(){
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
        
}