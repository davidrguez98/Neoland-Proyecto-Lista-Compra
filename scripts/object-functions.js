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

    if (loadDataBBDD) {
        return readLocalStorage("newList")
    } else {
        defaultBBDD.map( element => {
            articleList.push(element)
            setLocalStorage("newList", articleList)
            return readLocalStorage("newList")
        })
    }

    console.log(readLocalStorage("newList"))
}

//Carga y muestra el LocalStorage
export function displayLocalStorage() {

    let list = readLocalStorage("newList")
    console.log(list)

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

//Convierte en objeto los artíclos de una lista
export function reviveArticle(obj) {

    const article = Object.create(Article.prototype)
    article.img = obj.img
    article.name = obj.name
    article.description = obj.description
    article.stock = obj.stock
    article.price = obj.price
    return article

}