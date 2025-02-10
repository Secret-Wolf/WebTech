// Hier den Code ergaenzen
// (Event-Handling fuer Hinzufuegen-Button, DOM-Manipulation fuer Tabelle)

function createCheckbox(tr) {
  // Hier den Code fuer die Erzeugung der Checkbox ergaenzen
  // Empfohlene Strategie:
  // 1. Erstelle eine Checkbox per DOM-API
  // 2. Fuege einen Event-Handler fuer Klick auf die Checkbox hinzu
  // 3. Falls Checkbox angehakt (checked): Text in Zeile (tr) durchstreichen
  // 4. Sonst: Text in Zeile (tr) normal darstellen

  // 1. Erstelle eine Checkbox per DOM-API
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const checkboxZelle = document.createElement("td");
  checkboxZelle.appendChild(checkbox);

  // 2. Fuege einen Event-Handler fuer Klick auf die Checkbox hinzu
  checkbox.addEventListener("click", function () {
    //const todoZelle = tr.querySelector("td:nth-child(2)");
    const todoZelle = tr.children[1];

    //this bezieht sich tatsächlich NICHT auf das tr-Element, sondern auf die Checkbox selbst
    if (this.checked) {
      todoZelle.style.textDecoration = "line-through";
    } else {
      todoZelle.style.textDecoration = "none";
    }
  });

  tr.appendChild(checkboxZelle);
}

const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");
const tbody = document.querySelector("tbody");

buttonElement.addEventListener("click", function () {
  const todoText = inputElement.value;

  if (todoText.trim() !== "") {

  const neueZeile = document.createElement("tr");
  createCheckbox(neueZeile);

  const todoTextZelle = (document.createElement("td"));
  todoTextZelle.textContent = todoText;
  neueZeile.appendChild(todoTextZelle);
  tbody.appendChild(neueZeile);
  inputElement.value = "";
  }
});
