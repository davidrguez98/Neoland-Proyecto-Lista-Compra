import {  addArticle } from "../object-functions.js"

export function mainNewArticle() {

    addArticle()
    window.location.pathname.endsWith("admin-web.html") // No funciona, porque tengo que añadirlo dentro de la addArticle para que cuando pulse el botón se quite

}