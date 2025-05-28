import { displayLocalStorage } from "../object-functions.js"
import { deleteItemLocalStorage, resetLocalStorage } from "../localStorage/localStorage-scripts.js"

export function mainAdminWeb() {
    displayLocalStorage()
    deleteItemLocalStorage()

    document.querySelector(".reset-storage-js").addEventListener("click", function (event) {
        event.preventDefault()
        resetLocalStorage()
        displayLocalStorage()
    })
}

