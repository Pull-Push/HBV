const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5050'

//GET ALL PRODUCTS
export const getProducts = async () =>{
    const response = await fetch(`${API_BASE_URL}/api/products`)
    if(!response.ok) throw new Error('Failed to fetch products')
        return response.json()
}

//GET SINGLE PRODUCT BY ID
export const getProduct = async (id) =>{
    const response = await fetch(`${API_BASE_URL}/api/products/${id}`)
    if(!response.ok) throw new Error('Failed to fetch product')
        return response.json()
}

//GET BOX SIZES
export const getBoxSizes = async () =>{
    const response = await fetch(`${API_BASE_URL}api/products/sizes/boxes`)
    if(!response.ok) throw new Error('Failed to fetch box sizes')
        return response.json()
}

//GET BAG SIZES
export const getBagSizes = async () =>{
    const response = await fetch(`${API_BASE_URL}/api/products/sizes/bags`)
    if(!response.ok) throw new Error(`Failed to fetch bag sizes`)
        return response.json()
}

//GET GRIND TYPES
export const getGrindTypes = async () =>{
    const response = await fetch(`${API_BASE_URL}/api/products/grind-types`)
    if(!response.ok) throw new Error('Failed to fetch grind types')
        return response.json()
}