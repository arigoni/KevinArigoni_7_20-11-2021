# Groupomania
Septième et dernier projet du parcours développeur web chez OpenClassrooms.
L'objectif est de créer un réseau social d'entreprise pour "Groupomania".

## Instructions
- Il vous faudra avoir installé sur votre machine: NodeJS, MySQL et Git ou Gitkraken.
- Créer un dossier vide et cloner ce repository à l'intérieur: https://github.com/arigoni/KevinArigoni_7_20-11-2021
- Vous verrez deux dossiers distincts: frontend et backend.

## FRONTEND
- Ouvrez un terminal (assurez vous de bien être dans le dossier frontend) et faites: "npm install",
- Puis une fois l'installation terminée: "npm run serve", à ce moment là un message s'affichera "App running at:" pour accéder au site.

## BACKEND
- Cette partie se décompose en deux rubriques: MySQL et Serveur.
### MySQL
- Dans les settings de votre ordinateur, assurez vous qu'une instance MySQL soit bien active.
- Connectez-vous à mysql.
- Importez le fichier "initialisationBdd.sql" qui se trouve à la racine du projet.
-> Ceci va créer une base de données nommée "groupomania"
### Serveur
- Créez un fichier ".env" dans le dossier backend et y assignez des valeurs aux 6 variables suivantes:
  - DB_HOST = "Votre nom d’hôte MySQL définit l’endroit où votre base de données MySQL est hébergée, par exemple en local: localhost"
  - DB_PORT = "Le port MySQL par défaut est 3306"
  - DB_USER = "votre nom d'utilisateur pour votre base de données"
  - DB_PASS = "votre mot de passe pour votre base de données"
  - DB_NAME = groupomania
  - TKN_SECRET = "variable de votre choix"
- Ouvrir un second terminal (assurez vous de bien être dans le dossier backend) et faites: "npm install",
- Puis une fois l'installation terminée: "node server"

## Dans le navigateur
- Ouvrez votre navigateur à l'adresse: http://localhost:8080/
- Vous voyez l'écran de connexion du projet.
- Pour avoir le privilège d'Adminstrateur, revenez dans voter terminal connecté à MySQL, et importez le fichier setAdmin.sql. Cela attribuera au premier utilisateur créé (User id=1) les privilèges d'administration (isAdmin=1).

## Contact
Vous pouvez me contacter sur le [workplace d'openclassrooms](https://openclassrooms.workplace.com/profile.php?id=100070045058297) 
