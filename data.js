//Evelīna Frīdenberga - Tomaša
//palīdzēja Dāgs
const Phone = require("./database.js");

//tiek nolasīti/saglabāti dati.
exports.getNumbers = (req, res) => {
  Phone.find()
    .then((phone) => {
      res.status(200).json({
        status: "success",
        results: phone.length,
        phone,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "failed",
        error: err,
      });
    });
};
//tiek nolasīti/saglabāti dati.
exports.getNumber = (req, res) => {
  Phone.find({ number: req.body.phone })
    .then((phone) => {
      res.status(200).json({
        status: "success",
        results: phone.length,
        phone,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "failed",
        error: err,
      });
    });
};

//saglabāšanai, izveidošanai
exports.uploadNumber = (req, res) => {
  Phone.create({
    name: req.body.name,
    surname: req.body.surname,
    phone: req.body.phone,
  })
    .then((phone) => {
      res.status(200).json({
        status: "success",
        results: phone.length,
        phone,
      });
    })
    .catch((err) => {
      if (err.keyValue.phone) {
        res.status(500).json({
          status: "failed",
          error: "Phone number already exists!",
        });
      } else {
        res.status(500).json({
          status: "failed",
          error: err,
        });
      }
    });
};

//dzēšanai
exports.deleteNumber = (req, res) => {
  Phone.deleteOne({ phone: req.params.number })
    .then(() => {
      res.status(204).json();
    })
    .catch((err) => {
      res.status(500).json({
        status: "failed",
        error: err,
      });
    });
};
