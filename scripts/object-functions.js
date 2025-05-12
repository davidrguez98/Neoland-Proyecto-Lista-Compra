import { Article } from "./object.js"
import { file, name, description, quantity, size, price } from "./variables.js"

export let list = []

export function addArticle() {
    const img = file.files[0] ? URL.createObjectURL(file.files[0]) : ""
    const selectedSize = size.value
    const selectedQuantity = parseInt(quantity.value)
    const selectedPrice = price.value

    let existingArticle = list.find(article => article.name === articleName)

    if (existingArticle) {
        existingArticle.addStock(selectedSize, selectedQuantity, selectedPrice)
        console.log("Stock actualizado:", existingArticle)
    } else {
        const newArticle = new Article(img, name.value, description.value, selectedSize, selectedQuantity, selectedPrice)
        list.push(newArticle)
        console.log("Nuevo artículo añadido:", newArticle)
    }

    console.log("Lista actualizada:", list)
    
    return list
}

function display() {

    for (let i of list) {
            document.querySelector("#StorageList").innerHTML += `
            <ul>
                <li><img src="${i.img}" alt=""></li>
                <li>${i.name}</li>
                <li>${i.description}</li>
                <ul>
                    <li>${i.stock["250"]}</li>
                    <li>${i.stock["500"]}</li>
                    <li>${i.stock["1000"]}</li>
                </ul>
                <ul>
                    <li>${i.price["250"]}</li>
                    <li>${i.price["500"]}</li>
                    <li>${i.price["1000"]}</li>
                </ul>
            </ul>
            `
    }
}

function editArticle() {
    
}

function deleteArticle() {
    
}