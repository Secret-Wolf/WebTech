const express = require("express");
const app = express();
app.use(express.urlencoded({extended:false}));
//DAS EINBINDEN WICHTIG
const tasks = require("./models/tasks")


// Template Engine
app.set("view engine", "ejs");
app.set("views", "views");

// Middleware für Formulardaten
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  renderTemplate(res, tasks.getAllTasks());
});

app.get("/new", (req, res) => {
  res.render("new-task");
});

//NICHT FERTIG
app.post("/tasks", (req, res) => {
  console.log(req.body);
  //req.body ist das was ich vom browser aus dem Body bekomme, also die Daten vom Abschicken der Form
  renderTemplate(res, tasks.addTask(req.body));
});

app.post("/tasks/*/toggle", (req, res) => {
  console.log(req.body);
  renderTemplate(res, tasks.addTask(req.body));
});

app.get("tasks/filter", (req, res) => {
  renderTemplate(res, tasks.filterTasks(status, priority));
});


// Hier sollen Sie die notwendigen Routen implementieren:
// 1. GET / - Zeigt alle Tasks (mit optionalen Filtern)
// 2. GET /new - Formular für neuen Task
// 3. POST /tasks - Speichert einen neuen Task
// 4. POST /tasks/:id/toggle - Ändert den Status eines Tasks
// 5. GET /tasks/filter - Filtert Tasks nach Status/Priorität


//holt sich aus tasks.js die werte aus dem array mit den Aufgaben
function renderTemplate(res, tasks) {
  res.render("tasks", {
    tasks: tasks
  });
}


app.listen(3123, () => {
  console.log("Server läuft auf Port 3123");
});
