import { defaultBBDD } from "../../database/data-storage.js"
import { list } from "../object-functions.js"

async function loadStorage() {
    
    let dataStorage = defaultBBDD
    console.log(dataStorage)
}

loadStorage()