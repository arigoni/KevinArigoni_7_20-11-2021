const express = require("express");
// On crée un router avec la méthode mise à disposition par Express
const router = express.Router();
// On associe les fonctions aux différentes routes, on importe le controller
const userCtrl = require("../controllers/usersCtrl");
// On importe le middleware auth pour sécuriser les routes
const auth = require('../middleware/auth'); 

// Routes
router.get("/all/", userCtrl.findAllUsers)
router.get("/:id", userCtrl.findOneUser)
router.delete("/", auth, userCtrl.deleteOneUser)
router.delete("/:id", auth, userCtrl.deleteMyAccount)

module.exports = router