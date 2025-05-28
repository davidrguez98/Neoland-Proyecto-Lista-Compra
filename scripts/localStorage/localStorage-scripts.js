export function setLocalStorage(key, value) {
    if (key !== "" && value !== "") {
        localStorage.setItem(key, JSON.stringify(value));
        console.log("Set data:", key);
    } else {
        console.error("Invalid key or value");
    }
}

export function readLocalStorage(key) {
    const value = JSON.parse(localStorage.getItem(key));

    if (value !== null) {
        console.log("Data founded:", key, value);
        return value;
    } else {
        console.error("Data doesn't found: " + key);
        return null;
    }
}

export function resetLocalStorage() {
    localStorage.clear()
}

export function deleteItemLocalStorage() {

    const selectedButton = document.querySelectorAll("#StorageList #deleteButton")
    const list = readLocalStorage("newList")

    for (let index = 0; index < selectedButton.length; index++) {
        selectedButton[index].addEventListener("click", function() {
            list.splice(index, 1)
            setLocalStorage("newList", list)
            window.location.assign("./admin-web.html")
        })
    }
}

export function editItemLocalStorage() {

    const selectedButton = document.querySelectorAll("#StorageList #editButton")

    for (let index = 0; index < selectedButton.length; index++) {
        selectedButton[index].addEventListener("click", function() {
            console.log("boton" + index)
            // window.location.assign("./update-article.html")

            // document.querySelector(".editArticleContainer").innerHTML += `
            // <div class="mt-4 w-75 d-flex justify-content-center">
            //         <form id="myForm" class="w-100 p-3 rounded-3 shadow-sm" style="background-color: var(--color-background);">  
            //             <div class="mb-2">
            //                 <input class="form-control img-js" type="file" id="formFile">
            //             </div>

            //             <div class="input-group mb-2">
            //                 <span class="input-group-text" id="basic-addon1">Product's name</span>
            //                 <input type="text" class="form-control" id="name-js" placeholder="" aria-label="Username" aria-describedby="basic-addon1">
            //             </div>

            //             <div class="input-group mb-2">
            //                 <span class="input-group-text">Description</span>
            //                 <textarea class="form-control" id="description-js" aria-label="With textarea"></textarea>
            //             </div>

            //             <div class="input-group mb-2">
            //                 <span for="quantity" class="input-group-text">Quantity</span>
            //                 <input type="number" class="form-control quantity-js" id="quantity" value="1" min="1" style="width: 80px;">
            //             </div>

            //             <div class="input-group mb-2">
            //                 <span class="input-group-text">Size</span>
            //                 <select class="form-select py-0 mb-0 size-js" id="floatingSelect" aria-label="Floating label select example">
            //                     <option selected value="250">250 gr</option>
            //                     <option value="500">500 gr</option>
            //                     <option value="1000">1 Kg</option>
            //                 </select>
            //             </div>

            //             <div class="input-group mb-2">
            //                 <span for="price" class="input-group-text">Price</span>
            //                 <input type="number" class="form-control quantity-js" id="price" style="width: 80px;">
            //             </div>

            //             <div class="d-flex justify-content-between gap-2">
            //                 <a class="btn" style="background-color: var(--color-buttons); color: var(--color-background);" href="./admin-web.html" role="button">Cancel</a>
            //                 <div>
            //                     <input class="btn btn-primary border-0 new-article-js" id="new-article-js" type="submit" value="Add article" style="background-color: var(--color-buttons);">
            //                     <input class="btn btn-primary border-0" type="reset" value="Reset article" style="background-color: var(--color-buttons);">
            //                 </div>
            //             </div>
            //         </form>
            // </div>
            // `
        })
    }
}