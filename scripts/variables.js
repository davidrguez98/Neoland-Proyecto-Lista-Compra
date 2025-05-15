let myForm, file, name, description, quantity, price, size

if (typeof document !== "undefined") {
    myForm = document.querySelector("#myForm")
    file = document.querySelector(".img-js")
    name = document.querySelector("#name-js")
    description = document.querySelector("#description-js")
    quantity = document.querySelector("#quantity")
    price = document.querySelector("#price")
    size = document.querySelector("#floatingSelect")
}

export { myForm, file, name, description, quantity, price, size }