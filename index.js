if(process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require("express");
const expresslayout = require("express-ejs-layouts");

const app = express();
const PORT = process.env.PORT || 3000;

const indexRouter = require("./routes/index");

// Set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", "./views");
app.set("layout", "./layouts/layout");
app.use(expresslayout);
app.use(express.static("public"));

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to Mongoose"));

app.use('/', indexRouter);

// app.listen(PORT, ()=> console.log(`Server is running on PORT ${PORT}`));
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
//app.listen(process.env.PORT || 4000);