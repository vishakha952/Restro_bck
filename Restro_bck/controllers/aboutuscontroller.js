const path = require("path");

class aboutuscontroller {
  static getAboutus(req, res) {
    res.sendFile(path.join(__dirname, '../public/aboutus.html'));
  }
}

module.exports = aboutuscontroller;