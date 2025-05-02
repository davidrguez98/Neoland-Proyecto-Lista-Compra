/* ============ OBJETO ============ */

class Article {

    constructor(id, img, name, description, quantity) {
        this.id = id
        this.img  = img
        this.name = name
        this.description = description
        this.quantity = quantity
        this.size = [250, 500, 1.000]
    }
}

/* ============ FUNCIONES ============ */

let counter = 1

function addArticle(img, name, description = "No description", quantity) {

    id = counter
    counter++

    let newArticle = new Article(id, img, name, description, 3)

    return newArticle

}

function editArticle() {

}

function deleteArticle() {
    
}

let coffee1 = addArticle("foto1", "Colombia", "Café suave", 2)
let coffee2 = addArticle("foto1", "Guatemala", "Café suave", 2)
let coffee3 = addArticle("foto1", "Peru", "Café suave", 2)

console.log(coffee1)
console.log(coffee2)
console.log(coffee3)