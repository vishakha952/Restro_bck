const path = require("path");

class cartcontroller {
  static getCart(req, res) {
    res.sendFile(path.join(__dirname, '../public/cart.html'));
  }
}

module.exports = cartcontroller;