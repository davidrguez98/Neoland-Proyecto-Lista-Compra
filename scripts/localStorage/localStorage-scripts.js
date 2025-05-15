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

export function displayLocalStorage() {
    console.log("Local Storage's data:");
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        console.log(key + " = " + value);
    }
}

export function deleteItemLocalStorage(key) {
    if (localStorage.getItem(key) !== null) {
        localStorage.removeItem(key);
        console.log("Item deleted:", key);
    } else {
        console.error(`Error: ${key} doesn't found`);
    }
}

export function limpiarLocalStorage() {
    localStorage.clear();
    alert("Local Storage has been deleted.");
}