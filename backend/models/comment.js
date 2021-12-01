// Création d'un model user avec sequelize
const { Model } = require("sequelize");

// Création du modèle Comment pour un stockage dans la base de données
module.exports = (sequelize, DataTypes) => {
    class Comment extends Model {}
    
    Comment.init({
        comment: {
            type: DataTypes.TEXT
        }
    }, 
    {
        sequelize,
        modelName: "Comment"
    })
    return Comment
}