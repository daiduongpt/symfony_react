import CartConstants from '../contants/cart-constants'

export function addToCart(product, quantity, price) {
    return {
        type: CartConstants.ADD_PRODUCT_TO_CART,
        payload: {
            product,
            quantity,
            price
        }
    }
}
