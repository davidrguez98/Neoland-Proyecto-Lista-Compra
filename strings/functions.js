import { Article } from "./object.js"
import { myForm, file, name, description, quantity, size } from "./variables.js"
import { modalClose } from "../utilities/bootstrap-functions.js"
// import { storage } from "../database/data-article.js"

let list = []

function addArticle() {
    const img = file.files[0] ? URL.createObjectURL(file.files[0]) : ""
    const selectedSize = size.value
    const selectedQuantity = parseInt(quantity.value)

    let existingArticle = list.find(article => article.name === articleName)

    if (existingArticle) {
        existingArticle.addStock(selectedSize, selectedQuantity)
        console.log("Stock actualizado:", existingArticle)
    } else {
        const newArticle = new Article(img, name.value, description.value, selectedSize, selectedQuantity)
        list.push(newArticle)
        console.log("Nuevo artículo añadido:", newArticle)
    }

    console.log("Lista actualizada:", list)
}

function display() {

    document.querySelector(".asd").innerHTML = ""
    
    for (let i of list) {
            document.querySelector(".asd").innerHTML += `
            <ul>
            <li><img src="${i.img}" alt=""></li>
            <li>${i.name}</li>
            <li>${i.description}</li>
            <li>${i.quantity}</li>
            <li>${i.size}</li>
            </ul>
            `
    }
}

function editArticle() {
    
}

function deleteArticle() {
    
}


document.addEventListener("DOMContentLoaded", function() {

   
    

    
    myForm.querySelector(".new-article-js").addEventListener("click", function(event) {
        event.preventDefault()
        addArticle()
        display()
        modalClose("#addTaskModal")
    })

})