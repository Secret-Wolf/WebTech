// Simulierte Task-Datenbank
const tasks = [
    {
        id: 1,
        title: "Express lernen",
        description: "Router und Middleware verstehen",
        priority: "hoch",
        completed: false,
        dueDate: "2024-02-20"
    },
    {
        id: 2,
        title: "EJS Templates üben",
        description: "Partials und Includes beherrschen",
        priority: "mittel", 
        completed: true,
        dueDate: "2024-02-15"
    }
];

// Hier sollen Sie folgende Funktionen implementieren:

// 1. getAllTasks() - Gibt alle Tasks zurück
// 2. addTask(taskData) - Fügt einen neuen Task hinzu
// 3. toggleTaskStatus(id) - Ändert den Status eines Tasks
// 4. filterTasks(status, priority) - Filtert Tasks nach Kriterien
// 5. getTaskStats() - Gibt Statistiken zurück (Anzahl offen/erledigt pro Priorität)


function getAllTasks(){
    return tasks;
}

//taskData ist das req.body zeug
function addTask(taskData){
    tasks.push(taskData);
    return tasks;
}

module.exports={
    getAllTasks,
    addTask

}