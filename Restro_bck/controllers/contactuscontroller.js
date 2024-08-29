const path = require("path");

class contactuscontroller {
  static getContactus(req, res) {
    res.sendFile(path.join(__dirname, '../public/contactus.html'));
  }
}

module.exports = contactuscontroller;