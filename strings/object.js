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