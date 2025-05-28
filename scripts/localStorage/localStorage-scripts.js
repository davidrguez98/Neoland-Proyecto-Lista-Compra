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
