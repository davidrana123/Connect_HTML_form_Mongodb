const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://MERN-STACK:4g8fJ790cyf5CsBV@cluster0.4s7rg.mongodb.net/MERN-STACK", { useNewUrlParser: true }, { useUnifiedTopology: true })

//create a data Schema
const notesSchema = {
  title: String,
  content: String
}

const Note = mongoose.model("Note", notesSchema);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html")
})

app.post("/", function (req, res) {
  let newNote = new Note({
    title: req.body.title,
    content: req.body.content
  });
  newNote.save();
  res.redirect('/');
})

//app.post
app.listen(3000, function () {
  console.log("Server is running on 30000");
})