const express = require("express");
const app = express();
const port = 3000; //Tomar en cuenta el puerto

app.get("/", (req, res) =>{
  res.send("Hola clase de ciberseguridad II ^_^");
});

app.listen(port, () =>{
  console.log("My port: " + port); // No deben de ir consloe logs a producción
});
