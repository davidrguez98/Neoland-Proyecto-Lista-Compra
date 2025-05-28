import { displayLocalStorage } from "../object-functions.js"
import { deleteItemLocalStorage, editItemLocalStorage, resetLocalStorage } from "../localStorage/localStorage-scripts.js"

export function mainAdminWeb() {

    displayLocalStorage()
    deleteItemLocalStorage()
    editItemLocalStorage()

    document.querySelector(".reset-storage-js").addEventListener("click", function (event) {
        event.preventDefault()
        resetLocalStorage()
        displayLocalStorage()
    })
    
}

