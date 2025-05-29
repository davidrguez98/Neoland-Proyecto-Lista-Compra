import { readLocalStorage, setLocalStorage } from "../localStorage/localStorage-scripts.js"

const shoppingCartList = []

export function selectedProductSC() {

    const btnSelectedProduct = document.querySelectorAll(".container-articles #btnSelectedProduct")
    const list = readLocalStorage("newList")

    for (let index = 0; index < btnSelectedProduct.length; index++) {
        btnSelectedProduct[index].addEventListener("click", function() {

            const allSizeSelectors = document.querySelectorAll(".sizeSelector")
            const selectedSize = Number(allSizeSelectors[index].value)

            const productName = list[index].name
            const productPrice = Number(list[index].price[selectedSize]).toFixed(2)

            let productInfo = {"name": productName, "price": productPrice, "quantity": 1}

            const existingArticle = shoppingCartList.find(itemNewList => productName == itemNewList.name && productPrice == itemNewList.price)
                
            if (existingArticle) {
                existingArticle.quantity = existingArticle.quantity + 1 
            } else {
                console.log("Este " + productInfo)
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

    if (!list){
        console.log("lista vacía")
    } else {
        if (window.location.pathname.endsWith("/") || window.location.pathname.endsWith("index.html")) { 

            document.querySelector("#shoppingCartContainer").innerHTML = ""
            for (let article of list) { //tengo que ver como vario el precio


                document.querySelector("#shoppingCartContainer").innerHTML +=
                `
                <div class="d-flex flex-row cart-item mb-3">
                    <div class="d-flex flex-column" style="width: 70%;">
                        <h6 class="card-title">${article.name}</h6>
                        <div class=" d-flex">
                            <div class="input-group d-flex">
                                <button class="btn btn-outline-secondary btn-sm" type="button">-</button>
                                <input style="max-width:100px" type="text" class="form-control  form-control-sm text-center quantity-input" value="${article.quantity}">
                                <button class="btn btn-outline-secondary btn-sm" type="button">+</button>
                            </div>
                        </div>
                    </div>
                    <div class="md-2" style="width: 30%;">
                        <p class="fw-bold mb-0">$${article.price}</p>
                        <button class="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i></button>
                    </div>
                </div>
                `
            }
        }
    }
}