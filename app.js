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

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/projects", (req, res) => {
    res.render("projects");
});

app.get("/education", (req, res) => {
    res.render("education");
});

app.get("/achievements", (req, res) => {
    res.render("achievements");
});

app.get("/resume", (req, res) => {
    res.render("resume");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`StackFolio server running on port ${PORT}`);
});