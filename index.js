const express = require("express");
const cors = require("cors");

//create your app
const server = express();


//Middleware
server.use(cors());

// Create your routes

//Create article route
server.post("/create-article", (request, response) => {

    response.send("Article Created");


});

server.get("/get-article", (request, response) => {
    response.send("Articles Retrieved ");
});


server.listen(4343, ()=> console.log(`Server is listening on PORT 4343`));



