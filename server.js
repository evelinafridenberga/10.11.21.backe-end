//Evelīna Frīdenberga - Tomaša
//servera izveide, palīdzēja dāgs
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

const data = require("./data.js");

mongoose.connect(
  "mongodb+srv://eveliina_fr:eveliina_fr@cluster0.gkc9c.mongodb.net/tests?retryWrites=true&w=majority"
);

app.get("/", data.getNumbers); //lasīšanai, iegūšanai
app.get("/:number", data.getNumber); //lasīšanai, iegūšanai
app.post("/", data.uploadNumber); //datu saglabāšanai
app.delete("/:number", data.deleteNumber); //datu dzēšanai
app.all("/*", (req, res) => {
  res.send("Page doesn't exist!"); //atbilde
});
//servera ports
app.listen(process.env.PORT || 3000);
