const path = require("path");

class rootcontroller {
  static getIndex(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  }
}

module.exports = rootcontroller;
