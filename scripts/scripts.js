import { mainNewArticle } from "./pages/new-article-scripts.js"
import { mainAdminWeb } from "./pages/admin-web.js"
import { loadDataBBDD } from "./object-functions.js"
import { resetLocalStorage } from "./localStorage/localStorage-scripts.js"

function main() {

    loadDataBBDD()

    const path = window.location.pathname

    switch (true) {
        case path.endsWith("/") || path.endsWith("index.html"):
            console.log("index")

            break
        case path.endsWith("admin-web.html"):
            console.log("admin-web")

            mainAdminWeb()

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

document.addEventListener("DOMContentLoaded", main())