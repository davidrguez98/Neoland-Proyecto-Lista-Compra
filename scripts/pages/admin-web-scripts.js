import { displayLocalStorage, addArticle } from "../object-functions.js"
import { deleteItemLocalStorageAdmin, editItemLocalStorage, resetLocalStorage } from "../localStorage/localStorage-scripts.js"

export function mainAdminWeb() {

    displayLocalStorage()
    deleteItemLocalStorageAdmin()
    editItemLocalStorage()

    document.querySelector(".reset-storage-js").addEventListener("click", function (event) {
        event.preventDefault()
        resetLocalStorage("newList")
        displayLocalStorage()
    })

    document.querySelector("#addArticleModal .new-article-js").addEventListener("click", function() {
        addArticle()
    })
    
}

