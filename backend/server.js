// Ecoute des requetes http et reponse
const http = require("http");
const app = require("./app");

// Renvoie d'un port valide
const normalizePort = val => {
    const port = parseInt(val, 10)

    if (isNaN(port)) {
        return val
    }
    if (port >= 0) {
        return port
    }
    return false
}
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

// Créer un serveur avec express qui utilise app
const server = http.createServer(app);

// Le serveur écoute le port définit plus haut
server.listen(port);