import { Article } from "./object.js"
import { file, name, description, quantity, size, price } from "./variables.js"
import { defaultBBDD } from "../database/data-storage.js"
import { setLocalStorage, readLocalStorage } from "./localStorage/localStorage-scripts.js"

let articleList = []

export function addArticle() {

    const newList = readLocalStorage("newList")

    const img = file.files[0] ? URL.createObjectURL(file.files[0]) : ""
    const selectedSize = parseInt(size.value)
    const selectedQuantity = parseInt(quantity.value)
    const selectedPrice = price.value

    const newArticle = new Article(img, name.value, description.value, selectedSize, selectedQuantity, selectedPrice)
    
    // Comprobación de si está el objeto en el stock
    const existingArticle = newList.find(itemNewList => name.value == itemNewList.name)

    if (existingArticle) {
        console.log("es")
        console.log(typeof selectedSize)
        let sds = parseInt(selectedSize)
        console.log(typeof sds)
        newArticle.addStock(selectedSize, selectedQuantity, selectedPrice)
    } else {
        console.log("no es")
        newList.push(newArticle)
        console.log("Nuevo artículo añadido:", newArticle)
    }
        
    
    

    // Creación del nuevo item y guardado en el LocalStorage
    
    
        
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
