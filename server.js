const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", function(request, response){
    response.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, res) {
    res.send("Contact me at: akshay@gmail.com");
});

app.get("/about", function(req, res) {
    res.send("I am a Akshay & I am a Web Developer");
});

app.get("/hobbies", function(req, res) {
    res.send("<ul><li>Eat</li><li>Code</li><li>Sleep</li><li>Repeat</li></ul>");
});

app.listen(PORT, function (){
    console.log("Server is listening on port 3000");
});

// If nodemon fails to run then run the following command:
// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass