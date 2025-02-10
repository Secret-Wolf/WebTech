// Hier kommt Ihre Lösung hin!

// Funktion zum Erstellen einer neuen Tabellenzeile für eine Notiz
function erstelleNotizZeile(titel, text) {
  // TODO: Implementieren Sie diese Funktion
  // - Erstellen Sie eine neue Tabellenzeile (tr-Element)
  // - Fügen Sie drei Tabellenzellen (td-Elemente) hinzu:
  //   1. Eine Checkbox zum Markieren als wichtig
  //   2. Den Titel der Notiz
  //   3. Den Text der Notiz
  // - Geben Sie die erstellte Zeile zurück

  const tabellenZeile = document.createElement("tr");

  const checkboxZelle = document.createElement("td");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  //es gibt auch "click"
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      titelZelle.style.fontWeight = "bold";
    } else {
      titelZelle.style.fontWeight = "normal";
    }
  });

  checkboxZelle.appendChild(checkbox);

  const titelZelle = document.createElement("td");
  const titelText = document.createTextNode(titel);
  titelZelle.appendChild(titelText);

  const textZelle = document.createElement("td");
  const textBlock = document.createTextNode(text);
  textZelle.appendChild(textBlock);

  //Die Zeile die erstellt wurde, wird jetzt um die 3 Datenfelder erweitert
  tabellenZeile.appendChild(checkboxZelle);
  tabellenZeile.appendChild(titelZelle);
  tabellenZeile.appendChild(textZelle);

  //Eine Funktion muss eine Ausgabe erzeugen, wenn wir sie woanders verwenden möchten
  return tabellenZeile;
}

// Funktion zum Hinzufügen einer neuen Notiz
function fuegeNotizHinzu() {
  const titelEingabe = document.getElementById("titel");
  const textEingabe = document.getElementById("text");

  const tbody = document.querySelector("tbody");


  const titel = titelEingabe.value;
  const text = textEingabe.value;
  const neueZeile = erstelleNotizZeile(titel, text);

  tbody.appendChild(neueZeile);


    textEingabe.value = "";
    titelEingabe.value = "";


  // TODO: Implementieren Sie diese Funktion
  // - Lesen Sie die Werte aus den Eingabefeldern
  // - Erstellen Sie eine neue Tabellenzeile mit diesen Werten
  // - Fügen Sie die Zeile zur Tabelle hinzu
  // - Leeren Sie die Eingabefelder
}

// Event-Listener für den "Hinzufügen"-Button
document.getElementById("hinzufuegen").addEventListener("click", function () {
  // TODO: Implementieren Sie den Event-Listener
  fuegeNotizHinzu();

});
