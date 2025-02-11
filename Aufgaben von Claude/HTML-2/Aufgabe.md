Ich erstelle dir eine kombinierte Aufgabe, die sowohl Tabellen als auch ein Formular mit spezifischen Anforderungen an die HTTP-Anfrage enthält:

# Aufgabe: Produktübersicht und Registrierung [20 Punkte]

Erstellen Sie eine HTML-Datei `shop-register.html` mit folgenden Anforderungen:

## Teil 1: Produktübersicht (8 Punkte)
Erstellen Sie eine Tabelle mit folgenden Eigenschaften:

1. Die Tabelle soll einen Kopfbereich (`thead`), Inhaltsbereich (`tbody`) und Fußbereich (`tfoot`) haben.

2. Folgende Spalten sollen enthalten sein:
   - Artikelnummer
   - Produktname
   - Lagerbestand
   - Preis

3. In der Tabelle sollen mindestens 3 Produkte aufgelistet sein.

4. Im Tabellenfuß soll eine Zusammenfassung mit der Gesamtanzahl der Produkte erscheinen, die sich über alle Spalten erstreckt.

## Teil 2: Registrierungsformular (12 Punkte)

Erstellen Sie ein Registrierungsformular mit folgenden Anforderungen:

1. Bei Absenden soll eine HTTP-Anfrage mit folgenden Eigenschaften erzeugt werden:
   ```
   Header: POST /register HTTP/1.1
   Body: username=web123&password=geheim567&newsletter=yes&terms=accepted
   ```

2. Das Formular soll folgende Validierungsregeln enthalten:
   - Username: Muss mit 3 Buchstaben beginnen, gefolgt von genau 3 Ziffern
   - Passwort: Mindestens 8 Zeichen
   - Newsletter: Optional ankreuzbar
   - Nutzungsbedingungen: Muss akzeptiert werden

3. Verwenden Sie mindestens drei der folgenden HTML5-Elemente:
   - `details` und `summary` für ausklappbare Zusatzinformationen
   - `meter` zur Anzeige der Passwortstärke
   - `progress` für einen Fortschrittsbalken der Registrierung
   - `time` für Angabe des Registrierungsdatums
   - `figure` und `figcaption` für ein Profilbild
   - `mark` zur Hervorhebung wichtiger Informationen
   - `abbr` für die Erklärung von Abkürzungen

4. Strukturieren Sie die Seite mit den semantischen Elementen `header`, `main`, `section`, `article` und `footer`.

## Beispielausgabe im Browser:
[Hier würde ein Screenshot der fertigen Seite stehen]

Diese Aufgabe testet zusätzlich:
- Tabellen-Strukturierung mit `thead`, `tbody`, `tfoot`
- Zellen-Zusammenfassung mit `colspan`
- Neuere HTML5-Elemente wie `details`, `meter` etc.
- Korrekte semantische Strukturierung
- Reguläre Ausdrücke für Input-Validierung

Möchtest du diese Aufgabe lösen? Ich kann dir dann wieder Feedback geben und die verschiedenen HTML-Elemente im Detail erklären.