// Utilisation de multer pour enregistrer les fichiers images
const multer = require("multer");

// Modification de l'extension des fichiers
const MIME_TYPES = {
    "image/jpg":    "jpg",
    "image/jpeg":   "jpg",
    "image/png":    "png",
    "image/gif":    "gif"
}

const storage = multer.diskStorage({
    // Enregistrement dans le dossier "images"
    destination: (req, file, callback) => {
        callback(null, "images")
    },
    // Génération du nom du fichier : nom d'origine + numero unique + . + extension
    filename: (req, file, callback) => {
        let name = file.originalname.split(".")[0]
        name = name.split(" ").join("_")
        const extension = MIME_TYPES[file.mimetype]
        callback(null, name + Date.now() + "." + extension)
    }
})

module.exports = multer({storage: storage}).single("image") 