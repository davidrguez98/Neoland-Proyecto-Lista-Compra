import { addArticle } from "../object-functions.js";

export function addArticleModal() {

    document.querySelector("#addArticleModal .new-article-js").addEventListener("click", addArticle)
}