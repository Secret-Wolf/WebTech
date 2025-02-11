// Funktion zum Erstellen einer neuen Karte
function erstelleKarte(titel, text) {
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const titelText = document.createTextNode(titel);

  h3.appendChild(titelText);

  const p = document.createElement("p");
  const textText = document.createTextNode(text);
  p.appendChild(textText);

  const button = document.createElement("button");
  button.append("Wichtig");
  
  button.addEventListener("click", function(){
    if (this.click){
        div.style.border= "2px solid red";
    }
    else {
        div.style.border = "none";
    }
  });

  const loeschButton = document.createElement("button");
  loeschButton.append("Karte löschen");

  loeschButton.addEventListener("click", function(){
        div.remove();
  });



  div.append(h3, p, button, loeschButton);

  return div;
  // TODO: Implementieren Sie diese Funktion
  // - Erstellen Sie ein div-Element mit der Klasse "karte"
  // - Fügen Sie Titel (h3) und Text (p) ein
  // - Fügen Sie einen "Dringend"-Button hinzu, der die Karte rot umrandet
  // - Fügen Sie einen "Löschen"-Button hinzu
  // - Geben Sie das div-Element zurück
}

// Funktion zum Hinzufügen einer neuen Karte
function fuegeKarteHinzu() {
    const titelEingabe = document.getElementById("titel");
    const textEingabe = document.getElementById("text");

    const titel = titelEingabe.value;
    const text = textEingabe.value;

    

    const boardDiv = document.querySelector(".board");
    boardDiv.appendChild(erstelleKarte(titel, text));

    textEingabe.value = "";
    titelEingabe.value = "";
  // TODO: Implementieren Sie diese Funktion
  // - Lesen Sie die Werte aus den Eingabefeldern
  // - Erstellen Sie eine neue Karte mit diesen Werten
  // - Fügen Sie die Karte zum Board hinzu
  // - Leeren Sie die Eingabefelder
}

// Event-Listener für den "Hinzufügen"-Button
document.getElementById("hinzufuegen").addEventListener("click", function () {
  // TODO: Implementieren Sie den Event-Listener
    console.log("Hallo");
    fuegeKarteHinzu();

});
