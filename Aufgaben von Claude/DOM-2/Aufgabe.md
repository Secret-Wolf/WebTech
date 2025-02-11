Natürlich! Lassen uns eine Aufgabe mit einer dynamischen Kartenverwaltung erstellen.



# Aufgabe: Notizen-Board mit Karten [30 Punkte]

Erstellen Sie ein digitales Notizen-Board, auf dem Notizen als Karten dargestellt werden. Die Anwendung soll folgende Funktionalitäten bieten:

1. Notizen über ein Formular erstellen können [10 Punkte]
2. Notizen als Karten im Grid-Layout anzeigen [10 Punkte]
3. Karten als "dringend" markieren können (rote Umrandung) [5 Punkte]
4. Karten löschen können [5 Punkte]

Ihre Aufgabe ist es nun, die JavaScript-Datei (script.js) zu vervollständigen. Beachten Sie dabei folgende Anforderungen:

1. Verwenden Sie ausschließlich die native DOM-API (keine externen Bibliotheken).
2. Verwenden Sie nicht innerHTML oder insertAdjacentHTML.
3. Der "Dringend"-Button soll die CSS-Klasse "dringend" zur Karte hinzufügen/entfernen.
4. Der "Löschen"-Button soll die komplette Karte entfernen.

Zusätzliche Hinweise:
- Für die Buttons können Sie `createElement("button")` verwenden
- Zum Hinzufügen/Entfernen von CSS-Klassen können Sie die `classList`-API verwenden (z.B. `element.classList.toggle("dringend")`)
- Zum Löschen eines Elements können Sie `element.remove()` verwenden

Möchten Sie, dass ich Ihnen einen Hinweis zum Einstieg gebe?