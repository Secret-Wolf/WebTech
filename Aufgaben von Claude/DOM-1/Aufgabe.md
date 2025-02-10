Aufgabe:
Notizenverwaltung mit DOM-Manipulation [25 Punkte]
Erstellen Sie eine Webanwendung zur Verwaltung von Notizen. Die Anwendung soll folgende Funktionalitäten bieten:

1. Notizen über ein Formular hinzufügen können [10 Punkte]
2. Die Notizen in einer sortierbaren Tabelle anzeigen [10 Punkte]
3. Einzelne Notizen als "wichtig" markieren können [5 Punkte]

Ihre Aufgabe ist es nun, die JavaScript-Datei (script.js) zu vervollständigen. Beachten Sie dabei folgende Anforderungen:

- Verwenden Sie ausschließlich die native DOM-API (keine externen Bibliotheken).
- Verwenden Sie nicht innerHTML oder insertAdjacentHTML.
- Die Checkbox in der ersten Spalte soll beim Anklicken den Titel der Notiz fett formatieren.

Hier sind einige Tipps zur Umsetzung:

1. Für die Funktion erstelleNotizZeile:
- Nutzen Sie document.createElement() zum Erstellen neuer Elemente
- Verwenden Sie appendChild() zum Hinzufügen von Kindelementen
- Für die Checkbox können Sie ein input-Element mit type="checkbox" erstellen


2. Für die Funktion fuegeNotizHinzu:
- Nutzen Sie document.getElementById() zum Zugriff auf die Eingabefelder
- Verwenden Sie die value-Eigenschaft zum Auslesen der Eingabewerte
- Nutzen Sie querySelector() zum Finden der Tabelle


3. Für den Event-Listener der Checkbox:
- Nutzen Sie addEventListener() zum Registrieren des Click-Events
- Verwenden Sie die style-Eigenschaft zum Ändern der Formatierung