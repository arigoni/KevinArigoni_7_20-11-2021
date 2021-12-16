# Groupomania
Septième et dernier projet du parcours développeur web chez OpenClassrooms.
L'objectif est de créer un réseau social d'entreprise pour "Groupomania".

## Instructions 

* Il vous faudra avoir installé sur votre machine:
    * Node.js (et donc npm),
    * MySQL,
    * Git.

- Créer un dossier vide et cloner ce repository à l'intérieur:

```bash
git clone https://github.com/arigoni/KevinArigoni_7_20-11-2021
```

- Vous verrez deux dossiers distincts: frontend et backend.

## FRONTEND

- Ouvrez un terminal (assurez vous de bien être dans le dossier frontend) et faites:

```bash 
npm install
```

- Puis une fois l'installation terminée:

```bash
npm run serve
```

- A ce moment là un message s'affichera:

```bash
App running at:
  - Local:   http://localhost:8080/ 
  - Network: http://192.168.1.109:8080/
  ```

## BACKEND

- Cette partie se décompose en deux rubriques: MySQL et Serveur.

### MySQL

- Dans les settings de votre ordinateur, assurez vous qu'une instance MySQL soit bien active.

- Connectez-vous à mysql.

- Importez le fichier "initialisationBdd.sql" qui se trouve à la racine du projet.
-> Ceci va créer une base de données nommée "groupomania"

### Serveur

- Ouvrez le fichier " .env.initial " : vous devez assigner des valeurs aux 3 variables suivantes:

```bash
DB_USER = 
DB_PASS = 
TKN_SECRET = 
```

- DB_USER: votre nom d'utilisateur pour votre base de données.
- DB_PASS: votre mot de passe pour votre base de données.
- TKN_SECRET = variable de votre choix.

- Renommer ce dossier " .env " à la place de " .env.initial ".

- Ouvrir un second terminal (assurez vous de bien être dans le dossier backend) et faites:

```bash
npm install
```

- Puis une fois l'installation terminée:

```bash
node server
```

## DANS LE NAVIGATEUR

- Ouvrez votre navigateur à l'adresse: http://localhost:8080/

- Vous voyez l'écran de connexion à l'application. Allez dans la rubrique INSCRIPTION, inscrivez l'utilisateur de votre choix en suivant les instructions, puis connectez-vous.

- Pour avoir le privilège d'Adminstrateur, revenez dans voter terminal connecté à MySQL, et importez le fichier setAdmin.sql. Cela attribuera au premier utilisateur créé (User id=1) les privilèges d'administration (isAdmin=1).

Recharger la page de votre naviguateur pour voir votre compte passer de simple utilisateur à adminstrateur.

Le site vous permet de partager des images et de les commenter, les vôtres et celles des autres. Vous pouvez supprimer votre compte. L'administrateur peut supprimer les comptes de n'importe qui, ainsi que les commentaires et les images.

## Contact
Vous pouvez me contacter sur le [workplace d'openclassrooms](https://openclassrooms.workplace.com/profile.php?id=100070045058297) 