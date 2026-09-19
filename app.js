const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to StackFolio!");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`StackFolio server running on port ${PORT}`);
});