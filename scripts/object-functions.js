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
                                <select class="form-select mb-2" aria-label="Default select example">
                                    <option selected>250 gr</option>
                                    <option value="1">500 gr</option>
                                    <option value="2">1 Kg</option>
                                </select>
                                <h6>15,00$</h6>
                                <button class="btn" style="background-color: var(--color-buttons); color: var(--color-background);">Add to cart</button>
                            </div>
                        </div>
                    </div>`
                
            } 
        } else if(window.location.pathname.endsWith("admin-web.html")) { //hay que añadirle un nuevo formato para el admin

                for (let article of list) {

                    document.querySelector("#StorageList").innerHTML += `
                        <ul>
                            <li><img src="${article.img}" alt=""></li>
                            <li>${article.name}</li>
                            <li>${article.description}</li>
                            <ul>
                                <li>${article.stock["250"]}</li>
                                <li>${article.stock["500"]}</li>
                                <li>${article.stock["1000"]}</li>
                            </ul>
                            <ul>
                                <li>${article.price["250"]}</li>
                                <li>${article.price["500"]}</li>
                                <li>${article.price["1000"]}</li>
                            </ul>
                        </ul>
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