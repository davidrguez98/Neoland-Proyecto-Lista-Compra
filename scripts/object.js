export class Article {
  constructor(img, name, description, size, quantity, price) {
    this.img = img
    this.name = name
    this.description = description
    this.stock = {
      250: 0,
      "500": 0,
      "1000": 0
    }
    this.price = {
      "250": 0,
      "500": 0,
      "1000": 0
    }
    this.addStock(size, quantity, price)
  }

  addStock(size, quantity, price) {
    if (this.stock.hasOwnProperty(size)) {
      this.stock[size] = this.stock[size] + quantity; //En esta linea está el error, ya que el no me permite acceder a la nueva cantidad
      this.price[size] = price;
    } else {
      throw new Error(`Tamaño no válido: ${size}`);
    }
  }

  addNewStock(size, newQuantity) {
    if (this.stock.hasOwnProperty(size)) {
      this.stock[size] += newQuantity
    }
  }
}

/* 
Article {
  img: 'klasd',
  name: 'lkhdj',
  description: 'des',
  stock: { '250': 22, '500': 0, '1000': 0 },
  price: { '250': 15, '500': 0, '1000': 0 }
}
*/


// let d = new Article("laskd", "laskd", "laskd", 250, 2, 12)
// d.addNewStock(250, 2, 12)
// console.log(d)