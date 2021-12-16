const express = require("express");
// On crée un router avec la méthode mise à disposition par Express
const router = express.Router();
// On associe les fonctions aux différentes routes, on importe le controller
const commentCtrl = require("../controllers/commentsCtrl");
// On importe le middleware auth pour sécuriser les routes
const auth = require('../middleware/auth'); 

// Routes
router.get("/", commentCtrl .findAllComments);
router.get("/:Messageid", commentCtrl .findOneComment);
router.post("/", auth, commentCtrl .createComment);
router.delete("/", auth, commentCtrl .deleteComment);

module.exports = router;