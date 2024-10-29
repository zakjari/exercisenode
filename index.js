const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const personRoutes = require("./routes/personRoutes");
require ('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true 
  }).then(() => {
    console.log("Connected to MongoDB");
  }).catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });
  
  // Définir la route principal d'une API
  app.use("/api/persons", personRoutes);
  
  // Lancement du Server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  