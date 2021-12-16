const express = require("express");
// On crée un router avec la méthode mise à disposition par Express
const router = express.Router();
// On associe les fonctions aux différentes routes, on importe le controller
const authCtrl = require("../controllers/authCtrl.js");

// Routes
router.post("/signup", authCtrl.signup);
router.post("/login", authCtrl.login); 

module.exports = router;