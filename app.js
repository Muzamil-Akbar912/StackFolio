require("dotenv").config();

const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require("connect-flash");

const Contact = require("./models/Contact");
const Project = require("./models/Project");


const app = express();

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

// Session
app.use(
    session({
        secret: "stackfolio-secret",
        resave: false,
        saveUninitialized: true
    })
);

// Flash messages
app.use(flash());

// Make flash messages available in all EJS files
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    next();
});


// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });



// Home
app.get("/", (req, res) => {
    res.render("home");
});


// About
app.get("/about", (req, res) => {
    res.render("about");
});


// Projects
app.get("/projects", async (req, res) => {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.render("projects", { projects });
});


// Education
app.get("/education", (req, res) => {
    res.render("education");
});


// Achievements
app.get("/achievements", (req, res) => {
    res.render("achievements");
});


// Resume
app.get("/resume", (req, res) => {
    res.render("resume");
});


// Contact Page
app.get("/contact", (req, res) => {
    res.render("contact");
});


// Contact Form
app.post("/contact", async (req, res) => {
    const newContact = new Contact(req.body);
    await newContact.save();
    req.flash("success", "Your message has been sent successfully!");
    res.redirect("/contact");
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`StackFolio server running on port ${PORT}`);
});