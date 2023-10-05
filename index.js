const express = require("express");
const path = require("path");
const helmet = require("helmet");
const app = express();
const port = 3000; //Tomar en cuenta el puerto

app.use(helmet());

const allowedSections = ["about", "contact"];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "html", "index.html"));
});

app.get("/:section", (req, res) => {
  const section = req.params.section;
  if (allowedSections.includes(section)) {
    res.sendFile(path.join(__dirname, "html", section + ".html"));
  } else {
    res.status(404).send("Not Found");
  }
}
);


app.listen(port, () =>{
  console.log("My port: " + port); // No deben de ir consloe logs a producción
});
