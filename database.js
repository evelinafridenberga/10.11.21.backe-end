//Evelīna Frīdenberga - Tomaša
//shēma kādā dati tiek saglabāti db
const mongoose = require("mongoose");

const phoneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name is required!",
  },
  surname: {
    type: String,
    required: "Surname is required!",
  },
  phone: {
    type: Number,
    required: "Phone number is required!",
    minlength: 8,
    maxlength: 8,
    unique: true,
  },
});

const Phone = mongoose.model("Phone", phoneSchema);

module.exports = Phone;
