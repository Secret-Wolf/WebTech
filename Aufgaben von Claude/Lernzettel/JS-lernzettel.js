// ELEMENTAUSWAHL
const mainElement = document.querySelector('main');
const formElement = document.querySelector('form');
const tableBody = document.querySelector('tbody');
const addButton = document.getElementById('addButton');

// HILFSFUNKTIONEN
function createTableRow(data) {
    const tr = document.createElement('tr');
    
    // Checkbox Zelle
    const tdCheck = document.createElement('td');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        if(this.checked) {
            tr.style.backgroundColor = '#e0e0e0';
            tr.style.textDecoration = 'line-through';
        } else {
            tr.style.backgroundColor = '';
            tr.style.textDecoration = 'none';
        }

        updateStats();
    });
    tdCheck.appendChild(checkbox);
    
    // Text Zelle
    const tdText = document.createElement('td');
    tdText.textContent = data;
    
    // Löschen Button Zelle
    const tdDelete = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.addEventListener('click', () => tr.remove());
    tdDelete.appendChild(deleteBtn);
    
    // Alles zusammenfügen
    tr.append(tdCheck, tdText, tdDelete);
    tr.classList.add('table-row');  // Klasse hinzufügen
    return tr;
}

// EVENT HANDLING
addButton.addEventListener('click', function() {
    const input = document.querySelector('input[type="text"]');
    const text = input.value.trim();
    
    if(text !== '') {
        const row = createTableRow(text);
        tableBody.appendChild(row);
        input.value = '';
        
        // Sortieren der Einträge
        const rows = Array.from(tableBody.children);
        rows.sort((a, b) => {
            const textA = a.children[1].textContent.toLowerCase();
            const textB = b.children[1].textContent.toLowerCase();
            return textA.localeCompare(textB);
        });
        
        rows.forEach(row => tableBody.appendChild(row));
        
        // Nach Hinzufügen die Statistik aktualisieren
        updateStats();
    }
});

// DYNAMISCHE STYLE ANPASSUNG
const styleButton = document.createElement('button');
styleButton.textContent = 'Toggle Dark Mode';
styleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const rows = document.querySelectorAll('.table-row');
    rows.forEach(row => {
        row.style.color = document.body.classList.contains('dark-mode') ? 
            'white' : 'black';
    });
});
mainElement.insertBefore(styleButton, formElement);

// Vorheriger Code bleibt bestehen, hier die Ergänzungen:

// TextNode Beispiel für Statistiken
function updateStats() {
    const statsSection = document.getElementById('statsSection');
    statsSection.innerHTML = ''; // Clear current stats
    
    const totalTasks = tableBody.children.length;
    const completedTasks = document.querySelectorAll('input[type="checkbox"]:checked').length;
    
    // TextNode Verwendung
    const statsText = document.createTextNode(
        `Aufgaben gesamt: ${totalTasks}, Erledigt: ${completedTasks}`
    );
    const statsP = document.createElement('p');
    statsP.appendChild(statsText);
    statsSection.appendChild(statsP);

    // Element.replaceWith() Beispiel
    if (completedTasks === totalTasks && totalTasks > 0) {
        const oldMessage = statsP;
        const newMessage = document.createElement('p');
        newMessage.classList.add('highlight');
        newMessage.textContent = '🎉 Alle Aufgaben erledigt! 🎉';
        oldMessage.replaceWith(newMessage);
    }
}

// Bild mit figure/figcaption
function createTaskImage() {
    const imageContainer = document.getElementById('imageContainer');
    const figure = document.createElement('figure');
    
    const img = document.createElement('img');
    img.src = '/images/tasks.png';  // Beispiel-Pfad
    img.alt = 'Task Management Illustration';
    img.width = 200;
    img.height = 150;
    
    const figcaption = document.createElement('figcaption');
    figcaption.textContent = 'Task Manager Übersicht';
    
    figure.append(img, figcaption);
    imageContainer.appendChild(figure);
}

// Weitere DOM-Manipulationen
function addExtraFeatures() {
    // createElement mit mehreren Attributen
    const infoDiv = document.createElement('div');
    infoDiv.id = 'taskInfo';
    infoDiv.className = 'info-box';
    infoDiv.setAttribute('data-type', 'info');
    
    // innerHTML vs textContent Demonstration
    const warningSpan = document.createElement('span');
    warningSpan.innerHTML = '<strong>Wichtig:</strong> Regelmäßig Aufgaben prüfen!';
    infoDiv.appendChild(warningSpan);
    
    // insertBefore Beispiel
    const form = document.querySelector('form');
    form.parentNode.insertBefore(infoDiv, form);
    
    // Element klonen
    const infoDivClone = infoDiv.cloneNode(true);
    infoDivClone.textContent = 'Kopie des Info-Blocks';
    
    // Attribute prüfen und setzen
    if (!infoDiv.hasAttribute('lang')) {
        infoDiv.setAttribute('lang', 'de');
    }
    
    // classList Methoden
    infoDiv.classList.add('important');
    infoDiv.classList.remove('hidden');
    infoDiv.classList.toggle('active');
    
    // dataset Eigenschaften
    infoDiv.dataset.lastModified = new Date().toISOString();
}

// Event Delegation Beispiel
document.addEventListener('click', function(event) {
    if (event.target.matches('.task-button')) {
        // Handle button clicks
        console.log('Task button clicked:', event.target);
    }
});

// Modifiziere existierenden Event Listener
addButton.addEventListener('click', function() {
    // Vorheriger Code bleibt bestehen
    updateStats(); // Statistiken aktualisieren
});

// Initial Setup
createTaskImage();
addExtraFeatures();
updateStats();