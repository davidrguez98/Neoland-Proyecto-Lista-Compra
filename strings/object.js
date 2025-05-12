export class Article {
    constructor(img, name, description, size, quantity, price) {
      this.img = img
      this.name = name
      this.description = description
      this.stock = {
        "250": 0,
        "500": 0,
        "1000": 0
      }
      this.price = {
        "250": 0,
        "500": 0,
        "1000": 0
      }
      this.addStock(size, quantity, price) // añade la cantidad inicial al tamaño seleccionado
      // this.addPrice(size, price) // añade la cantidad inicial al tamaño seleccionado
    }

    addStock(size, quantity, price) {
      if (this.stock.hasOwnProperty(size)) {
        this.stock[size] = this.stock[size] + quantity;
        this.price[size] = price;
      } else {
        throw new Error(`Tamaño no válido: ${size}`);
      }
    }
  }