Basierend auf den Klausuraufgaben und dem gewünschten Fokus erstelle ich eine Übungsaufgabe zu CSS:

# CSS-Übungsaufgabe [15 Punkte]

## Aufgabenstellung:
Gegeben ist folgender HTML-Code und ein zugehöriges CSS-Stylesheet. Die Webseite soll ein Blog-System für eine Bibliothek darstellen.

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <title>Bibliotheks-Blog</title>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <header>
        <h1>Bibliotheks-Blog</h1>
        <nav>
            <a href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#about">About</a>
        </nav>
    </header>
    
    <main>
        <article class="blog-post">
            <h2>Neue Bücher eingetroffen!</h2>
            <p class="date">Veröffentlicht am: <time>2024-02-15</time></p>
            <p>Wir freuen uns über folgende Neuerwerbungen:</p>
            <ul>
                <li>Der Herr der Ringe</li>
                <li>Die Verwandlung</li>
                <li>1984</li>
            </ul>
            <p class="read-more">Weiterlesen...</p>
        </article>

        <article class="blog-post">
            <h2>Öffnungszeiten im Sommer</h2>
            <p class="date">Veröffentlicht am: <time>2024-02-14</time></p>
            <p>Die Sommeröffnungszeiten wurden aktualisiert.</p>
            <p class="read-more">Weiterlesen...</p>
        </article>
    </main>
</body>
</html>
```

Erstellen Sie das CSS-Stylesheet `style.css`, das folgende Anforderungen erfüllt:

1. [3 Punkte] Alle Links in der Navigation sollen:
   - Standardmäßig grau sein (#666666)
   - Beim Hover blau werden (#0066cc)  
   - Nach Besuch violett sein (#660066)
   - Keinen Unterstrich haben

2. [4 Punkte] Für die Blog-Artikel gilt:
   - Der erste Artikel soll einen blauen Rahmen haben (2px solid #0066cc)
   - Das erste Element in jedem Artikel soll fett sein
   - Listen innerhalb von Artikeln sollen rote Aufzählungspunkte haben
   - Der "Weiterlesen..." Text soll rechtsbündig und kursiv sein

3. [4 Punkte] Verwenden Sie Pseudoelemente um:
   - Vor jedem Artikel-Titel ein "📚" einzufügen
   - Nach jedem externen Link (erkennbar an href, die mit "http" beginnen) ein "↗" einzufügen
   - Den ersten Buchstaben jedes Artikels größer (2em) darzustellen
   - Nach dem Datum eine gestrichelte Linie einzufügen

4. [4 Punkte] Nutzen Sie die passenden Selektoren/Kombinatoren:
   - Wählen Sie nur die direkten `<p>`-Elemente innerhalb von Artikeln aus
   - Selektieren Sie alle `<li>`-Elemente, die auf ein anderes `<li>`-Element folgen
   - Wählen Sie das letzte Kind-Element jedes Artikels aus
   - Selektieren Sie alle Zeitangaben (`<time>`) die sich innerhalb von Paragraphen befinden

Hinweise:
- Achten Sie auf die Spezifität Ihrer Selektoren
- Verwenden Sie wo möglich semantisch sinnvolle Selektoren
- Die Verwendung von !important ist nicht erlaubt



Soll ich auch eine Musterlösung für die Aufgabe erstellen?