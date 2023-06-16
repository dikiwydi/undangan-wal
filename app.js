const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { body, validationResult, check } = require("express-validator");
const session = require("express-session");
const methodOverride = require("method-override");





const app = express();
const port = 3000;

// mengunakan method override
app.use(methodOverride("_method"));

// setup ejs
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Middleware untuk memproses data form
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index", {
        layout: "layouts/main-layout",
        // nama: "diki wahyudi",
        title: "Undangan wal ",
        // mahasiswa,
    });
});

app.get("/undangan", (req, res) => {
    res.render("undangan", {
        layout: "layouts/main-layout",
        title: "Undangan wal ",
    });
});

app.get("/:nama", (req, res) => {
    const tamu = req.params.nama;

    res.render("index", {
        layout: "layouts/main-layout",
        title: "undangan wal",
        tamu,
    });
});



app.listen(port, () => {
    console.log(`server  berjalan pada http://localhost:${port}`);
});
