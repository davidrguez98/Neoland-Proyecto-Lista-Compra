import { displayLocalStorage } from "../object-functions.js"
import { selectedProductSC, displayProductInShoppingCart } from "../shopping-cart/selected-object-functions.js"


export function mainIndexWeb() {

    displayLocalStorage()
    selectedProductSC()
    displayProductInShoppingCart()

}

