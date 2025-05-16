import { Article } from "./object.js"
import { file, name, description, quantity, size, price } from "./variables.js"
import { defaultBBDD } from "../database/data-storage.js"
import { setLocalStorage, readLocalStorage } from "./localStorage/localStorage-scripts.js"

let articleList = []

export function addArticle() {

    // Se recoge el contenido del LS y se vuelve a convertir en objetos
    const newList = readLocalStorage("newList").map(reviveArticle)

    const img = file.files[0] ? URL.createObjectURL(file.files[0]) : ""
    const selectedSize = parseInt(size.value)
    const selectedQuantity = parseInt(quantity.value)
    const selectedPrice = price.value

    const newArticle = new Article(img, name.value, description.value, selectedSize, selectedQuantity, selectedPrice)
    
    // Comprobación de si está el objeto en el stock
    const existingArticle = newList.find(itemNewList => name.value == itemNewList.name)

    if (existingArticle) {
        existingArticle.addNewStock(selectedSize, selectedQuantity)
        console.log(existingArticle)
    } else {
        newList.push(newArticle)
        console.log("Nuevo artículo añadido:", newArticle)
    }

    // Guardado en el LocalStorage
    console.log(newList)
    setLocalStorage("newList", newList)
}

export function loadDataBBDD() {

    defaultBBDD.map( element => {
        articleList.push(element)
    })
    console.log(articleList)
    return articleList
}

export function display(list = []) {

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

function reviveArticle(obj) {

    const article = Object.create(Article.prototype) // Crea una instancia vacía
    article.img = obj.img
    article.name = obj.name
    article.description = obj.description
    article.stock = obj.stock
    article.price = obj.price
    return article

}