import { readLocalStorage, resetLocalStorage, setLocalStorage, deleteItemLocalStorageShoppingCart, editItemLocalStorageShoppingCart } from "../localStorage/localStorage-scripts.js"

export function selectedProductSC() {

    const btnSelectedProduct = document.querySelectorAll(".container-articles #btnSelectedProduct")
    const list = readLocalStorage("newList")

    for (let index = 0; index < btnSelectedProduct.length; index++) {
        btnSelectedProduct[index].addEventListener("click", function() {

            const allSizeSelectors = document.querySelectorAll(".sizeSelector")
            const selectedSize = Number(allSizeSelectors[index].value)

            const productName = list[index].name
            const productPrice = Number(list[index].price[selectedSize]).toFixed(2)

            let shoppingCartList = readLocalStorage("shoppingCartList") || []

            let productInfo = {"name": productName, "price": productPrice, "quantity": 1}

            const existingArticle = shoppingCartList.find(itemNewList => productName == itemNewList.name && productPrice == itemNewList.price)
                
            if (existingArticle) {
                existingArticle.quantity = existingArticle.quantity + 1 
            } else {
                shoppingCartList.push(productInfo)
            }
            console.log(shoppingCartList)
            setLocalStorage("shoppingCartList", shoppingCartList)
            displayProductInShoppingCart()
        })
    }
}

export function displayProductInShoppingCart() {

    const list = readLocalStorage("shoppingCartList")

    if (!list || list.length == 0){
        console.log("lista vacía")

        document.querySelector("#orderSummaryContainer").innerHTML =
                `
                <div class="card cart-summary">
                    <div class="card-body">
                        <h5 class="card-title mb-4">Order Summary</h5>
                        <div class="d-flex justify-content-between mb-3">
                            <span>Subtotal</span>
                            <span>--</span>
                        </div>
                        <div class="d-flex justify-content-between mb-3">
                            <span>Shipping</span>
                            <span>--</span>
                        </div>
                        <div class="d-flex justify-content-between mb-3">
                            <span>Discount</span>
                            <span>--</span>
                        </div>
                        <hr>
                        <div class="d-flex justify-content-between mb-4">
                            <strong>Total</strong>
                            <strong>--</strong>
                        </div>
                        <button class="btn" style="background-color: var(--color-buttons); color: var(--color-background);">Proceed to Checkout</button>
                    </div>
                </div>
            `

        document.querySelector("#shoppingCartContainerButton").innerHTML = ""

        document.querySelector("#shoppingCartContainer").innerHTML = 
        `
        <div class="d-flex flex-row cart-item mb-3">
            <div class="d-flex flex-column" style="width: 70%;">
                
            </div>
            
        </div>
        `
            
    } else {
        if (window.location.pathname.endsWith("/") || window.location.pathname.endsWith("index.html")) { 

            document.querySelector("#shoppingCartContainer").innerHTML = ""

            for (let article of list) { 
                document.querySelector("#shoppingCartContainer").innerHTML +=
                `
                <div class="d-flex flex-row cart-item mb-3">
                    <div class="d-flex flex-column" style="width: 70%;">
                        <h6 class="card-title">${article.name}</h6>
                        <div class=" d-flex">
                            <div class="input-group d-flex">
                                <button class="btn btn-outline-secondary btn-sm itemShoppingCartMinus" type="button">-</button>
                                <input style="max-width:100px" type="text" class="form-control  form-control-sm text-center quantity-input" value="${article.quantity}">
                                <button class="btn btn-outline-secondary btn-sm itemShoppingCartPlus" type="button">+</button>
                            </div>
                        </div>
                    </div>
                    <div class="md-2" style="width: 30%;">
                        <p class="fw-bold mb-0">$${article.price}</p>
                        <button type="submit" class="btn btn-sm btn-outline-danger removeOneShoppingCart"><i class="bi bi-trash"></i></button>
                    </div>
                </div>
                `
            }

            document.querySelector("#shoppingCartContainerButton").innerHTML = ""
                   
            document.querySelector("#shoppingCartContainerButton").innerHTML =
            `
            <button class="btn" id="removeItemsShoppingCart" style="background-color: var(--color-background); color: var(--color-text); type="submit">Remove all items</button>
            `

            deleteItemLocalStorageShoppingCart()
            editItemLocalStorageShoppingCart()
            removeShoppingCart()

            const listPrices = []
            document.querySelector("#orderSummaryContainer").innerHTML = ""
            for (let article of list) { 
                let subtotal = 0
                let shipping = 10
                listPrices.push(parseFloat(article.price * article.quantity))
                for (let num of listPrices) subtotal+=num
                let total =  (subtotal + shipping)
    
                
                document.querySelector("#orderSummaryContainer").innerHTML =
                `
                <div class="card cart-summary">
                    <div class="card-body">
                        <h5 class="card-title mb-4">Order Summary</h5>
                        <div class="d-flex justify-content-between mb-3">
                            <span>Subtotal</span>
                            <span>$${subtotal.toFixed(2)}</span>
                        </div>
                        <div class="d-flex justify-content-between mb-3">
                            <span>Shipping</span>
                            <span>$${shipping.toFixed(2)}</span>
                        </div>
                        <div class="d-flex justify-content-between mb-3">
                            <span>Tax</span>
                            <span>10.00%</span>
                        </div>
                        <hr>
                        <div class="d-flex justify-content-between mb-4">
                            <strong>Total</strong>
                            <strong>$${total.toFixed(2)}</strong>
                        </div>
                        <button class="btn" style="background-color: var(--color-buttons); color: var(--color-background);">Proceed to Checkout</button>
                    </div>
                </div>
            `
            }
        }
    }
}

function removeShoppingCart() {

    const btnReset = document.querySelector("#shoppingCartContainerButton #removeItemsShoppingCart")

    if (!btnReset) {
        console.log("No existe")
    } else {
        btnReset.addEventListener("click", function(event) {
            event.preventDefault()
            resetLocalStorage("shoppingCartList")
            displayProductInShoppingCart()
        })
    }
}