import { Article } from "./object.js"
import { file, name, description, quantity, size, price } from "./variables.js"
import { defaultBBDD } from "../database/data-storage.js"
import { setLocalStorage, readLocalStorage } from "./localStorage/localStorage-scripts.js"

let articleList = []

//Crea artículos y comprueba si ya están
export function addArticle() {

    // Se recoge el contenido del LS y se vuelve a convertir en objetos
    const articleList = readLocalStorage("newList").map(reviveArticle)

    const img = file.files[0] ? URL.createObjectURL(file.files[0]) : ""
    const selectedSize = parseInt(size.value)
    const selectedQuantity = parseInt(quantity.value)
    const selectedPrice = price.value

    const newArticle = new Article(img, name.value, description.value, selectedSize, selectedQuantity, selectedPrice)
    
    // Comprobación de si está el objeto en el stock
    const existingArticle = articleList.find(itemNewList => name.value == itemNewList.name)

    if (existingArticle) {
        existingArticle.addNewStock(selectedSize, selectedQuantity)
        console.log(existingArticle)
    } else {
        articleList.push(newArticle)
        console.log("Nuevo artículo añadido:", newArticle)
    }

    // Guardado en el LocalStorage
    console.log(articleList)
    setLocalStorage("newList", articleList)
}

//Carga los productos predefinidos (solo principio)
export function loadDataBBDD() {

    const loadDataBBDD = readLocalStorage("newList")

    if (!loadDataBBDD || loadDataBBDD.lenght === 0) {
        defaultBBDD.forEach(element => articleList.push(element))
        setLocalStorage("newList", articleList)
        console.log("Artículos cargados por defecto")
    } else {
        console.log("Ya hay datos en el localStorage. No se cargan los predefinidos")
    }
}

//Carga y muestra el LocalStorage
export function displayLocalStorage() {

    let list = readLocalStorage("newList")

    if (!list) {

        if (window.location.pathname.endsWith("/") || window.location.pathname.endsWith("index.html")) {
            document.querySelector(".container-articles").innerHTML = ""
        } else if(window.location.pathname.endsWith("admin-web.html")) {
            document.querySelector("#StorageList").innerHTML = ""
        }

    } else {
        
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
                                <h6 class="priceSelector">${article.price["250"].toFixed(2)}$</h6>
                                <button class="btn" style="background-color: var(--color-buttons); color: var(--color-background);">Add to cart</button>
                            </div>
                        </div>
                    </div>`
            }

            const allSizeSelectors = document.querySelectorAll(".sizeSelector")
            const allPriceDisplays = document.querySelectorAll(".priceSelector")

            // Actualiza el precio cuando se cambia el selector
            allSizeSelectors.forEach((selector, index) => {
                selector.addEventListener("change", function () {
                    const selectedSize = selector.value
                    const newPrice = list[index].price[selectedSize]
                    allPriceDisplays[index].textContent = `${newPrice.toFixed(2)}$`
                })
            })

        } else if(window.location.pathname.endsWith("admin-web.html")) { //hay que añadirle un nuevo formato para el admin

            for (let article of list) { //Como mejora debería de añadirle un contador de artículos para que se dividan en páginas

                document.querySelector("#StorageList").innerHTML += `
                    <div class="card mb-3" style="max-width: 100%;">

                        <div class="row g-0">
                            <div class="col-md-4" style="width: 20%">
                                <img src="${article.img}" alt="photo of coffee" class="img-fluid rounded-start" style=" height: 15rem">
                            </div>

                            <div class="col-md-8 d-flex align-items-stretch py-2" style="width: 60%;">
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">${article.name}</h5>
                                    <p class="card-text">${article.description}</p>
                                    <div class="gap-2 mt-auto"> <!-- empuja los botones abajo -->
                                        <button class="btn" style="background-color: var(--color-buttons); color: var(--color-background);">Edit</button>
                                        <button class="btn" style="background-color: var(--color-buttons); color: var(--color-background);">Delete</button>
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex align-items-stretch py-2" style="width: 20%;">
                                <div class="card-body d-flex flex-column">
                                    <h6 class="card-title mb-0">Stock</h6>
                                    <p class="mb-0">250gr - ${article.stock["250"]} Units</p>
                                    <p class="mb-0">500gr - ${article.stock["500"]} Units</p>
                                    <p class="mb-0">1Kg   - ${article.stock["1000"]} Units</p>

                                    <h6 class="card-title mb-0" style="margin-top: 1em;">Price</h6>
                                    <p class="mb-0">250gr - ${article.price["250"].toFixed(2)}$</p>
                                    <p class="mb-0">500gr - ${article.price["500"].toFixed(2)}$</p>
                                    <p class="mb-0">1Kg   - ${article.price["1000"].toFixed(2)}$</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
            }
        }
    }
}

//Convierte en objeto los artíclos de una lista
function reviveArticle(obj) {

    const article = Object.create(Article.prototype)
    article.img = obj.img
    article.name = obj.name
    article.description = obj.description
    article.stock = obj.stock
    article.price = obj.price
    return article

}