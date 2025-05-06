import { Article } from "./object.js";
import { myForm, file, name, description, quantity, size } from "./variables.js"
import { modalClose } from "../utilities/bootstrap-functions.js"

let ARTICLES = []
let counter = 0

function addArticle() {
    
    const id = counter++
    const img = file.files[0] ? URL.createObjectURL(file.files[0]) : ""
    
    let newArticle = new Article(id, img, name.value, description.value, quantity.value, size.value)

    ARTICLES.push(newArticle)    
}

function display() {

    document.querySelector(".asd").innerHTML = ""
    
    for (let i of ARTICLES) {
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
