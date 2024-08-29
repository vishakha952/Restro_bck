const path = require("path");

class restrocontroller {
  static getRestro(req, res) {
    res.sendFile(path.join(__dirname, '../public/restro.html'));
  }
}

module.exports = restrocontroller;