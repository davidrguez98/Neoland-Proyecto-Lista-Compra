// export class Article {

//     constructor(id, img, name, description, quantity, size) {
//         this.id = id
//         this.img  = img
//         this.name = name
//         this.description = description
//         this.quantity = quantity
//         this.size = size
//     }
// }

// class Article1 {

//     constructor(id, img, name, description, size, quantity) {
//         this.id = id
//         this.img  = img
//         this.name = name
//         this.description = description
//         this.size = size /* HAY QUE CONTAR CON QUE HAY QUE COGER EL VALOR QUE DA AL SELECCIONAR EL TAMAÑO */
//         this.quantity = quantity /* HAY QUE CONTAR CON QUE HAY QUE COGER EL VALOR QUE DA AL SELECCIONAR LA CANTIDAD */
//         }

//     setQuantity(size) { 

//         let size250 = 0
//         let size500 = 0
//         let size1000 = 0

//         if (size === 250) {
//             size250 += this.quantity
//         } else if (size === 500) {
//             size500 += this.quantity
//         } else {
//             size1000 += this.quantity
//         }
//     }
// }

// let dos = new Article1(1, "foto", "David", "ssssiii", 250, 3)
// dos.setQuantity(250)

// console.log(dos)

// class Article2 {

//     constructor(id, img, name, description, size, quantity) {
//         this.id = id
//         this.img  = img
//         this.name = name
//         this.description = description
//         this.size = size
//         this.quantity = quantity /* HAY QUE CONTAR CON QUE HAY QUE COGER EL VALOR QUE DA AL SELECCIONAR LA CANTIDAD */
//         }

    

        

//     /* setQuantity(size) { 

//         if (this.size === 250) {
//             "250" += this.quantity
//         } else if (this.size === 500) {
//             "500" += this.quantity
//         } else {
//             "1000" += this.quantity
//         }
//     } */
// }


export class Article {
    constructor(img, name, description, size, quantity) {
      this.img = img;
      this.name = name;
      this.description = description;
      this.stock = {
        "250": 0,
        "500": 0,
        "1000": 0
      };
      this.addStock(size, quantity); // añade la cantidad inicial al tamaño seleccionado
    }
  
    addStock(size, quantity) {
      if (this.stock.hasOwnProperty(size)) {
        this.stock[size] = this.stock[size] + quantity;
      } else {
        throw new Error(`Tamaño no válido: ${size}`);
      }
    }
}

let list = []

function addArticle(img, name, description, size, quantity) {
    
    let newArticle = new Article(img, name, description, size, quantity)

    let stockArticle = list.find(article => article.name === name)

    if (stockArticle) {
        stockArticle.addStock(size, quantity)
    } else {       
        list.push(newArticle)
    }
}

/* TENGO QUE REHACER LO ANTERIOR PARA AÑADIR EL STOCK DE ESTA FORMA */