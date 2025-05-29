import { displayLocalStorage } from "../object-functions.js"
import { selectedProductSC, displayProductInShoppingCart } from "../shopping-cart/shopping-cart-functions.js"

export function mainIndexWeb() {

    displayLocalStorage()
    displayProductInShoppingCart()
    selectedProductSC()
    
}

