const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");


//routing
app.get("/", (req, res)) => {
    renderTemplate(res, holeStartBild)
}



// Hier sollen Sie die notwendigen Routen implementieren:
// 1. GET / - Zeigt die Galerie mit dem aktuellen Bild
// 2. GET /next - Navigiert zum nächsten Bild
// 3. GET /prev - Navigiert zum vorherigen Bild 
// 4. GET /image/:index - Zeigt spezifisches Bild

// Statische Dateien (Bilder etc) werden aus dem public Ordner bereitgestellt
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server läuft auf Port 3000");
});



