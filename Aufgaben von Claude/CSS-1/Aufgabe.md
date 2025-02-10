Ich erstelle eine praxisnahe CSS-Aufgabe, die verschiedene wichtige CSS-Konzepte abdeckt und vom Schwierigkeitsgrad ähnlich der SoSe24 Klausur ist.



# CSS-Übungsaufgabe: Restaurant-Menükarte [17 Punkte]

Erstellen Sie eine responsive Menükarte für ein Restaurant. Die Menükarte soll folgende Anforderungen erfüllen:

## Ausgangsmaterial

Im Verzeichnis "aufgabe-menu" finden Sie:
- menu.html: Die HTML-Struktur der Menükarte
- style.css: Ein leeres Stylesheet, das Sie ergänzen sollen
- img/: Ein Verzeichnis mit Bildern für die Speisen

Die HTML-Datei darf nicht verändert werden.

## Anforderungen 

1. Desktop-Layout (> 768px):
- Die Menükarte soll ein 2-spaltiges Grid-Layout verwenden
- Jede Speise soll in einer Card dargestellt werden mit:
  - Bild oben (max. Höhe 200px)
  - Titel und Beschreibung darunter
  - Preis rechts unten

2. Mobile Layout (≤ 768px):
- Die Cards sollen untereinander in einer Spalte angeordnet werden
- Die Bilder sollen eine max. Höhe von 150px haben

3. Hover-Effekte:
- Beim Hover über eine Card soll diese leicht nach oben schweben (transform: translateY)
- Der Übergang soll animiert sein (transition)
- Der Schatten der Card soll sich beim Hover verstärken

4. Stilregeln:
- Nutzen Sie CSS-Variablen für wiederkehrende Farben
- Die Cards sollen einen leichten Schatten haben (box-shadow)
- Verwenden Sie relative Einheiten (em, rem) für Abstände und Schriftgrößen

Lassen Sie mich die Ausgangsdateien als Artifacts bereitstellen:

Nun stelle ich eine Musterlösung als Artifact bereit:

Die Lösung demonstriert wichtige CSS-Konzepte:

1. CSS-Variablen mit `:root`
2. Grid-Layout mit `grid-template-columns`
3. Flexibles Layout mit relativen Einheiten
4. Transformationen und Transitionen für Hover-Effekte
5. Box-Shadow für Tiefenwirkung
6. Media Queries für Responsivität
7. Positionierung (absolut/relativ)
8. CSS-Selektoren verschiedener Spezifität

Neu eingeführte Konzepte gegenüber der Klausuraufgabe:
- CSS-Variablen für bessere Wartbarkeit
- Transform und Transition für Animationen
- Object-fit für Bildanpassung
- Positionierungstechniken

Möchten Sie, dass ich bestimmte Konzepte genauer erkläre oder haben Sie Fragen zur Implementierung einzelner Aspekte?