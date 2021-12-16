// Importation d'express, Framework basé sur node.js
const express = require("express");
// Pour gérer la demande POST provenant de l'application front-end, nous devrons être capables d'extraire l'objet JSON de la demande
const bodyParser = require("body-parser");
// Importation Cors pour éviters les erreurs du même nom
const cors = require("cors");
// Utilisation du module 'helmet' pour la sécurité en protégeant l'application de certaines vulnérabilités
const helmet = require("helmet");
// Plugin qui sert dans l'upload des images et permet de travailler avec les répertoires et chemin de fichier
const path = require("path");
// Middleware d'authenfication
const auth = require("./middleware/auth");

// Création d'une application express
const app = express();

// appel des models dans la DB
const dataBase = require("./models");

// Déclaration des routes
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")
const messageRoutes = require("./routes/message")
const commentRoutes = require("./routes/comment")

// On utilise helmet pour plusieurs raisons notamment la mise en place du X-XSS-Protection afin d'activer le filtre de script intersites(XSS) dans les navigateurs web
app.use(helmet());
// On utilise Cors (Cross Origin Requests) pour éviter les erreurs du même nom
app.use(cors());

// Transforme les données arrivant de la requête POST en un objet JSON facilement exploitable
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Synchronisation de la base de données grâce à Sequelize
dataBase.sequelize.sync(); 

// Middleware qui va transmettre les requêtes vers ces url vers les routes correspondantes
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/auth", authRoutes);
app.use("/api/users", auth, userRoutes);
app.use("/api/messages", auth, messageRoutes);
app.use("/api/comments", auth, commentRoutes);

// Export de l'application express pour déclaration dans server.js
module.exports = app