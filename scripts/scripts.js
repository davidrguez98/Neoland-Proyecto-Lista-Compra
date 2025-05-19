import { mainNewArticle } from "./pages/new-article-scripts.js"
import { mainAdminWeb } from "./pages/admin-web.js"
import { setLocalStorage } from "./localStorage/localStorage-scripts.js"
import { loadDataBBDD } from "./object-functions.js"

document.addEventListener("DOMContentLoaded", main())


function main() {

    setLocalStorage("newList", loadDataBBDD())

    const path = window.location.pathname

    switch (true) {
        case path.endsWith("/") || path.endsWith("index.html"):
            console.log("index")
            break
        case path.endsWith("admin-web.html"):
            console.log("admin-web")

            
            mainAdminWeb()
            /* Debe de llevar, LocalStorage // display, reset, newFastArticle, NewArticle */

            break
        case path.endsWith("delete-article.html"):
            console.log("delete-article")

            /* Debe de llevar DeleteArticle y ¿LocalStorage?*/

            break
        case path.endsWith("new-article.html"):

            document.querySelector(".new-article-js").addEventListener("click", function(event) {
                event.preventDefault()
                mainNewArticle()
                window.location.assign("./admin-web.html")
            })

            break
        case path.endsWith("update-article.html"):
            console.log("update-article")

            /* Debe de llevar UpdateArticle y ¿LocalStorage?*/

            break
        default:

            /* Hay que añadir un caso y pag personalizada para error 404*/

            console.log("aksldjasld")
    }
}