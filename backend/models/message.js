// Création d'un model user avec sequelize
const { Model } = require("sequelize");

// Création du modèle Message pour un stockage dans la base de données
module.exports = (sequelize, DataTypes) => {
    class Message extends Model {}
  
    Message.init({
        message: {
            type: DataTypes.TEXT
        },
        messageUrl: {
            type: DataTypes.STRING
        }
    }, 
    {
        sequelize,
        modelName: "Message"
    })
    return Message
}