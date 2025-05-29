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

            // console.log(productName)
            // console.log(productPrice)

            let productInfo = {"name": productName, "price": productPrice, "quantity": 1}

            const existingArticle = shoppingCartList.find(itemNewList => productName == itemNewList.name && productPrice == itemNewList.price)
                
            if (existingArticle) {
                existingArticle.quantity++
            } else {
                shoppingCartList.push(productInfo)
            }
            console.log(shoppingCartList)
            setLocalStorage("shoppingCartList", shoppingCartList)
        })
        
    }
}

function createProductForShoppingCart() {

    const list = readLocalStorage("shoppingCartList")

    if (window.location.pathname.endsWith("/") || window.location.pathname.endsWith("index.html")) { 
        for (let article of list) { //tengo que ver como vario el precio
            
            document.querySelector(".container-articles").innerHTML +=
                `<div class="col text-start pb-4" style="width: 32%;">
                    <div class="card">
                        <img src="${article.img}" alt="photo of coffee">
                        <div class="card-body">  
                            <h5 class="card-title">${article.name}</h5>
                            <textarea class="card-text short-description">${article.description}</textarea>
                            <select class="form-select mb-2 sizeSelector" aria-label="Default select example">
                                <option selected value="250">250 gr</option>
                                <option value="500">500 gr</option>
                                <option value="1000">1 Kg</option>
                            </select>
                            <h6 class="priceSelector ps-1">${Number(article.price["250"]).toFixed(2)}$</h6>
                            <button id="btnSelectedProduct" class="btn" style="background-color: var(--color-buttons); color: var(--color-background);">Add to cart</button>
                        </div>
                    </div>
                </div>`
        }
    }
}

//     <div class="d-flex flex-row cart-item mb-3">
//         <div class="d-flex flex-column" style="width: 70%;">
//             <h6 class="card-title">Product</h6>
//             <div class=" d-flex">
//                 <div class="input-group d-flex">
//                     <button class="btn btn-outline-secondary btn-sm" type="button">-</button>
//                     <input style="max-width:100px" type="text" class="form-control  form-control-sm text-center quantity-input" value="1">
//                     <button class="btn btn-outline-secondary btn-sm" type="button">+</button>
//                 </div>
//             </div>
//         </div>
//         <div class="md-2" style="width: 30%;">
//             <p class="fw-bold mb-0">$99.99</p>
//             <button class="btn btn-sm btn-outline-danger">
//                 <i class="bi bi-trash"></i>
//             </button>
//         </div>
//     </div>
// 