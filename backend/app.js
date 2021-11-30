// Importation d'express, Framework basé sur node.js
const express = require('express');
// Pour gérer la demande POST provenant de l'application front-end, nous devrons être capables d'extraire l'objet JSON de la demande
const bodyParser = require('body-parser');
// Utilisation du module 'helmet' pour la sécurité en protégeant l'application de certaines vulnérabilités
const helmet = require('helmet');
// Plugin qui sert dans l'upload des images et permet de travailler avec les répertoires et chemin de fichier
const path = require('path');
// Middleware d'authenfication
const auth = require("./middleware/auth");

// Déclaration des routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const articleRoutes = require('./routes/article');
const likeRoutes = require('./routes/like');
const commentRoutes = require('./routes/comment');

// Création d'une application express
const app = express();

// Définition de headers pour éviters les erreurs de CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    if (req.method === 'OPTIONS') {
      res.send(200);
    }
    else {
      next();
    }
});

// Transforme les données arrivant de la requête POST en un objet JSON facilement exploitable
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// On utilise helmet pour plusieurs raisons notamment la mise en place du X-XSS-Protection afin d'activer le filtre de script intersites(XSS) dans les navigateurs web
app.use(helmet());

// appel des models dans la DB
const db = require("./models");
// Synchronisation de la base de données grâce à Sequelize
db.sequelize.sync();

// Middleware qui va transmettre les requêtes vers ces url vers les routes correspondantes
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', authRoutes);
app.use('/api/users', auth, userRoutes);
app.use('/api/articles', auth, articleRoutes);
app.use('/api/likes', auth, likeRoutes);
app.use('/api/comments', auth, commentRoutes);

// Export de l'application express pour déclaration dans server.js
module.exports = app;