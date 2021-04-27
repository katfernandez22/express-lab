const express = require('express');
const PORT = process.env.Port || 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my Webpage!");
});

app.get("/favorite-food", (req, res) => {
  res.send("Pasta");
});

app.get("/favorite-movie", (req, res) => {
  res.send("Harry Potter");
});

app.get("/about-me", (req, res) => {
  res.send("I am an educator and ux designer.");
});

app.get("/contact", (req, res) => {
  res.send("Your email address");
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})