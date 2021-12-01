// Création d'un model user avec sequelize
const { Model } = require("sequelize")

// Création du modèle User pour un stockage dans la base de données
module.exports = (sequelize, DataTypes) => {
    class User extends Model {}
    User.init({
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, 
    {
        sequelize,
        modelName: "User"
    })
    return User
}