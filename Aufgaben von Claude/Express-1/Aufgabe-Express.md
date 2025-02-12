Ich erstelle eine ähnliche Aufgabe zur Klausurvorbereitung, die Express, EJS Templates und Routing verwendet.



# Express Übungsaufgabe: Image Gallery App

Erstellen Sie mit Express eine Web-Anwendung zur Anzeige einer Bildergalerie. Die Anwendung soll folgende Funktionalität bieten:

1. Ein zentrales Bild wird in der Mitte angezeigt
2. Links/Rechts neben dem Bild sind Thumbnails der vorherigen/nächsten Bilder zu sehen
3. Unter den Bildern gibt es Navigations-Links zum Vor- und Zurückblättern

Die Anwendung soll nach MVC-Pattern strukturiert sein mit:
- Models für die Datenverwaltung
- Views für die Darstellung  
- App.js für das Routing

Hier sind die notwendigen Dateien:

Die Aufgabe ist der Original-Klausuraufgabe ähnlich, verwendet aber:

1. Ein komplexeres Layout mit Thumbnails
2. Mehr Funktionalität im Model (Gallery View)
3. Styling mit CSS
4. Zusätzliche Bildmetadaten (Titel, Beschreibung)

Folgende Dinge sollen Sie implementieren:

1. In app.js:
- Routen für die Navigation durch die Galerie
- Einbindung des gallery-Models
- Rendern des Templates mit den passenden Daten

2. In gallery.js:
- Funktionen zum Zugriff auf die Bilder
- Gallery-View Logik für die Thumbnail-Anzeige
- Wrap-Around Navigation (wenn man am Ende ist, springt man zum Anfang)

3. In gallery.ejs:
- Layout mit Flex-Box für die Galerie
- Anzeige von Haupt- und Vorschaubildern
- Titel und Beschreibung des aktuellen Bildes
- Navigations-Buttons

Die Aufgabe testet:
- Express Router und Middleware
- MVC Pattern Verständnis  
- EJS Template Engine
- Asynchrone Navigation
- CSS Layout

Möchten Sie, dass ich auch eine Musterlösung für die Aufgabe bereitstelle?