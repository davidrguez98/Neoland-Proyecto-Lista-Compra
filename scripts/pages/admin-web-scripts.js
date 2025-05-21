import { displayLocalStorage } from "../object-functions.js"
import {resetLocalStorage} from "../localStorage/localStorage-scripts.js"

export function mainAdminWeb() {

    displayLocalStorage()

    document.querySelector(".reset-storage-js").addEventListener("click", function(event) {
        event.preventDefault()
        resetLocalStorage()
        displayLocalStorage()
    })
   
}

