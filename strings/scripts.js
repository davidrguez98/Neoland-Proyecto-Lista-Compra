import {} from "../utilities/bootstrap-functions.js"

document.addEventListener("DOMContentLoaded", function() {

    display()
       
    myForm.querySelector(".new-article-js").addEventListener("click", function(event) {
        event.preventDefault()
        addArticle()
        display()
        window.open("./admin-web.html")
        modalClose("#addTaskModal")
    })

})