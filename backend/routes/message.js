const express = require("express");
// On crée un router avec la méthode mise à disposition par Express
const router = express.Router();
// On importe le middleware auth pour sécuriser les routes
const auth = require('../middleware/auth'); 
// On associe les fonctions aux différentes routes, on importe le controller  
const messageCtrl = require("../controllers/messagesCtrl");
//On importe le middleware multer pour la gestion des images
const multer = require("../middleware/multer-config");

// Routes
router.post("/", auth,multer, messageCtrl.createMessage);
router.get("/all/:id", messageCtrl.findAllMessagesForOne);
router.get("/:id", messageCtrl.findOneMessage);
router.get("/", messageCtrl.findAllMessages);
router.delete("/", auth, messageCtrl.deleteMessage);

module.exports = router;