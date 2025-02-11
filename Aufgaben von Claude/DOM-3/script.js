// Funktion zum Erstellen einer neuen Aufgaben-Karte
function erstelleAufgabe(text, spaltenId) {
  // TODO: Implementieren Sie diese Funktion
  // - Erstellen Sie ein div-Element mit der Klasse "aufgabe"
  // - Fügen Sie den Aufgabentext ein
  // - Fügen Sie einen "Löschen"-Button hinzu
  // - Fügen Sie "Nach links"/"Nach rechts"-Buttons je nach spaltenId hinzu
  // - Geben Sie das div-Element zurück

  const div = document.createElement("div");
  div.classList.add("aufgabe");

  const aufgabentext = document.createElement("p");
  const textNode = document.createTextNode(text);
  aufgabentext.appendChild(textNode);

  const loeschButton = document.createElement("button");
  loeschButton.append("Karte löschen");

  loeschButton.addEventListener("click", function () {
    div.remove();
    aktualisiereStatistik();
  });

  const linksButton = document.createElement("button");
  linksButton.append("<--");

  if (spaltenId !== "todo") {
    // Wenn nicht in der ersten Spalte
    const linksButton = document.createElement("button");
    linksButton.textContent = "←";
    linksButton.addEventListener("click", function () {
      verschiebeAufgabe(div, "links");
    });
  }

  if (spaltenId !== "done") {
    // Wenn nicht in der letzten Spalte
    const rechtsButton = document.createElement("button");
    rechtsButton.textContent = "→";
    rechtsButton.addEventListener("click", function () {
      verschiebeAufgabe(div, "rechts");
    });
  }

  div.append(aufgabentext, loeschButton, linksButton, rechtsButton);

  return div;
}

// Funktion zum Verschieben einer Aufgabe
function verschiebeAufgabe(aufgabeElement, richtung) {
  // TODO: Implementieren Sie diese Funktion
  // - Finden Sie die aktuelle Spalte der Aufgabe
  // - Bestimmen Sie die Zielspalte basierend auf der Richtung
  // - Verschieben Sie die Aufgabe in die Zielspalte
  // - Aktualisieren Sie die Buttons der Aufgabe
  // - Aktualisieren Sie die Statistik

  // 1. Finde die aktuelle Spalte
  // parentElement gibt uns das Element, das diese Aufgabe enthält (die Spalte)
  const aktuelleSpalte = aufgabeElement.parentElement;
  const aktuelleId = aktuelleSpalte.id; // "todo", "progress" oder "done"

  aktualisiereStatistik();

  let zielId;
    if (richtung === "links") {
        // Wenn wir nach links gehen:
        // von "done" nach "progress"
        // von "progress" nach "todo"
        if (aktuelleId === "done") zielId = "progress";
        if (aktuelleId === "progress") zielId = "todo";
    } else {
        // Wenn wir nach rechts gehen:
        // von "todo" nach "progress"
        // von "progress" nach "done"
        if (aktuelleId === "todo") zielId = "progress";
        if (aktuelleId === "progress") zielId = "done";
    }
    
    // 3. Finde die Zielspalte im DOM
    const zielSpalte = document.getElementById(zielId);
    
    // 4. Entferne die alte Aufgabenkarte
    aufgabeElement.remove();
    
    // 5. Erstelle eine neue Aufgabenkarte mit aktualisierten Buttons
    const aufgabenText = aufgabeElement.querySelector("p").textContent;
    const neueAufgabe = erstelleAufgabe(aufgabenText, zielId);
    
    // 6. Füge die neue Karte in die Zielspalte ein
    zielSpalte.appendChild(neueAufgabe);
}

// Funktion zum Aktualisieren der Statistik
function aktualisiereStatistik() {
  // TODO: Implementieren Sie diese Funktion
  // - Zählen Sie die Aufgaben in jeder Spalte
  // - Aktualisieren Sie die Anzeige im Statistik-Bereich
}

// Event-Listener für den "Hinzufügen"-Button
document.getElementById("hinzufuegen").addEventListener("click", function () {
  // TODO: Implementieren Sie den Event-Listener
  // - Lesen Sie den Text aus dem Eingabefeld
  // - Erstellen Sie eine neue Aufgabe in der "Todo"-Spalte
  // - Leeren Sie das Eingabefeld
  // - Aktualisieren Sie die Statistik

  const textEingabe = document.getElementById("text");
  const text = textEingabe.value;

  textEingabe.value = "";

  erstelleAufgabe(text, spaltenID);
});
