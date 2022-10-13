import { server } from "./lib/server.js";

const app = {};

app.init = () => {
    //susikurti pirminius trukstamus objektus:
    // -folder
    // -failus
    //gauti prisijungima prie DB
    //paleisti pacia serverio logika
    server.init();
    //reguliarus procesai:
    // -atsinaujinti 3rd party info(API, pvz.: valiutu kursai, likuciai..)
    // -duomenu archyvavimas
    // -duomenu agreagavimas (statistika)
    // -pasalinti nebereikalingus objektus:
    //  -failai (tokens)
    //  -DB optimizavimas
}

app.init();

//module.exports = app;

export { app }
