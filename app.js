const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");


const app = express();
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("home");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`StackFolio server running on port ${PORT}`);
});