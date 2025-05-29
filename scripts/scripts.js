import { loadDataBBDD } from "./object-functions.js"
import { mainAdminWeb } from "./pages/admin-web-scripts.js"
import { mainNewArticle } from "./pages/new-article-scripts.js"
import { mainIndexWeb } from "./pages/index-web-scripts.js"
import { mainEditArticle } from "./pages/update-article-scripts.js"


function main() {

    loadDataBBDD()

    const path = window.location.pathname

    switch (true) {
        case path.endsWith("/") || path.endsWith("index.html"):
            console.log("index")
            mainIndexWeb()
            break

        case path.endsWith("/admin-web.html"):
            console.log("admin-web")
            mainAdminWeb()
            break

        case path.endsWith("/new-article.html"):
            document.querySelector(".new-article-js").addEventListener("click", function(event) {
                event.preventDefault()
                mainNewArticle()
                window.location.assign("./admin-web")
            })
            break

        case path.endsWith("/update-article.html"):
            console.log("update-article")
            mainEditArticle()
            break

        default:
            window.location.href = "./404.html"
    }
}

document.addEventListener("DOMContentLoaded", main)