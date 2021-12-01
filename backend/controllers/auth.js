// On récupère notre model User ,créer avec le modèle
const db        = require("../models");
const User      = db.users;
// On utilise l'algorithme bcrypt pour hasher le mot de passe des utilisateurs
const bcrypt    = require("bcrypt");
// On utilise le package jsonwebtoken pour attribuer un token à un utilisateur au moment ou il se connecte
const jwt       = require("jsonwebtoken");

// Signup ou Inscription
// On sauvegarde un nouvel utilisateur et crypte son mot de passe avec un hash généré par bcrypt
exports.signup = (req, res, next) => {   
  if ( !req.body.userName || !req.body.email || !req.body.password ) {
    return res.status(400).json({message: "one ore more paramaters empty"})
  }
  const nameRegex = /(.*[a-z]){3,30}/;
  const mailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  const pwdRegex  = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/  

  if (nameRegex.test(req.body.userName) && mailRegex.test(req.body.email) && pwdRegex.test(req.body.password)) {
    // On appelle la méthode hash de bcrypt et on lui passe le mdp de l'utilisateur, le salte (10) ce sera le nombre de tours qu'on fait faire à l'algorithme
    bcrypt.hash(req.body.password, 10)  
    // On récupère le hash de mdp qu'on va enregister en tant que nouvel utilisateur dans la BBD MySQL                                         
    .then(hash => {     
      // Création du nouvel utilisateur avec le model                                                      
      const user = new User({ 
        // On passe le user qu'on trouve dans le corps de la requête
        userName: req.body.userName,  
        // On passe l'email qu'on trouve dans le corps de la requête                                                      
        email: req.body.email,     
        // On récupère le mdp hashé de bcrypt
        password: hash                 
      });
      // On enregistre l'utilisateur dans la base de données
      user.save()                                                     
      .then((user) => { 
        if (user) {
          return res.status(201).json({ message: 'new user created' })
        }
      })            
      .catch((error) => {res.status(401).json({ error})});  
    })
    .catch((error) => { res.status(500).json({message: " erreur serveur " + error})})
  } else {
    res.status(400).json({message: " incorrect parameters "})
  }               
};
  
// Login ou Connexion
exports.login = (req, res, next) => {
  if ( !req.body.email || !req.body.password ) {
    return res.status(400).json({message: "one ore more paramaters empty"})
}
  User.findOne({
    where: {
      email: req.body.email
    }
    })       
  .then(user => {
    if (!user) {  
      return res.status(404).json({ message: 'email not found' }); 
    }
    bcrypt.compare(req.body.password, user.password)        
    .then(valid => {    
      if (!valid) {                                             
        return res.status(401).json({ message: "mot de passe non valide" });           
      } 
      res.status(200).json({
        message:    "Connexion réussie",
        userId:     user.id,
        role:       user.isAdmin,
        userName :  user.userName,
        token: jwt.sign( { userId: user.id }, process.env.TKN_SECRET, { expiresIn: '24h' } )
      })
    })
    .catch(error => res.status(500).json({ error }));                             
    })
  .catch(error => res.status(500).json({ error }));                                 
};