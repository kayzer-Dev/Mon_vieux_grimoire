const express = require("express");

const app = express();

const mongoose = require("mongoose");

// Utilisez le nouvel utilisateur de test
mongoose
  .connect(
    "mongodb+srv://maxime01:testpassword123@cluster0.hgetnuz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.post("/api/stuff", (req, res) => {
  console.log(req.body);
  res.status(201).json({
    message: "Objet créé !",
  });
});

app.get("/api/stuff", (req, res) => {
  const stuff = [
    {
      _id: "oeihfzeoi",
      title: "Mon premier objet",
      description: "Les infos de mon premier objet",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
      price: 4900,
      userId: "gsomihvgios", // Correction: 'usezId' to 'userId'
    },
    {
      _id: "oeihfzeomoihi",
      title: "Mon deuxième objet",
      description: "Les infos de mon deuxième objet",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
      price: 2900,
      userId: "gsomihvgios", // Correction: 'usezId' to 'userId'
    },
  ];
  res.status(200).json(stuff);
});

module.exports = app;
