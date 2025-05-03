/* ============ OBJETO ============ */

class Article {

    constructor(id, img, name, description, quantity, size) {
        this.id = id
        this.img  = img
        this.name = name
        this.description = description
        this.quantity = quantity
        this.size = size
    }
}

document.addEventListener("DOMContentLoaded", function() {

    
    /* ============ VARIBLES ============ */
    
    const myForm = document.querySelector("#myForm")
    
    /* ============ FUNCIONES ============ */
    
    let counter = 1
    let ARTICLES = []
    
    function addArticle() {

        const file = document.querySelector(".img-js").files[0];
        const img = file ? URL.createObjectURL(file) : "";
        const name = document.querySelector(".name-js").value
        const description = document.querySelector(".description-js").value
        const quantity = document.querySelector(".quantity-js").value
        const size = document.querySelector(".size-js").value
        
        id = counter
        counter++
        
        let newArticle = new Article(id, img, name, description, quantity, size)

        ARTICLES.push(newArticle)
              
    }

    function display() {
        
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

    
    myForm.querySelector(".new-article-js").addEventListener("click", function(event) {
        event.preventDefault()
        addArticle()
        display()
        console.log()
    })

    document.querySelector(".new-article").addEventListener("click", function(event) {
        event.preventDefault()
        addArticle()
        display()
    })

})
