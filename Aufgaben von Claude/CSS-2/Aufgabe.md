Ich erstelle dir eine Übungsaufgabe zum Thema CSS-Spezifität und Selektoren, ähnlich der Klausuraufgabe, aber mit anderen Elementen und Anforderungen.

**Aufgabe: CSS-Selektoren und Spezifität [15 Punkte]**

Der folgende HTML-Code enthält interne CSS-Stylesheets:

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <title>Produktkatalog</title>
    <meta charset="utf-8" />
    <style>
        main article { padding: 1em; }
        .product { background-color: lightgray; }
    </style>
    <link rel="stylesheet" type="text/css" href="style.css" />
    <style>
        article.featured { background-color: lightyellow; }
        main article > p { font-size: 14px; }
        h2 + p { color: darkgray; }
    </style>
</head>
<body>
    <main>
        <h1 id="catalog-title">Unsere Produkte</h1>
        <article class="product featured">
            <h2>Premium Produkt</h2>
            <p class="description">Ein hochwertiges Produkt</p>
            <p class="price">99,99 €</p>
        </article>
        <article class="product">
            <h2>Standard Produkt</h2>
            <p class="description">Ein normales Produkt</p>
            <p class="price">49,99 €</p>
        </article>
    </main>
</body>
</html>
```

Schreiben Sie das externe Stylesheet `style.css`, so dass die Darstellung der HTML-Seite wie folgt geändert wird:

1. Die Überschrift "Unsere Produkte" soll zentriert und in dunkelblau dargestellt werden.
2. Artikel mit der Klasse "featured" sollen einen goldenen Hintergrund haben (statt hellgelb) und einen 2px breiten dunkelgoldenen Rahmen.
3. Die Preis-Paragraphen (.price) sollen rechtsbündig und fett dargestellt werden. In featured Artikeln sollen die Preise zusätzlich rot sein.
4. Die Beschreibungstexte (.description) sollen eine Schriftgröße von 16px haben (statt 14px) und kursiv dargestellt werden.

Der HTML-Code darf nicht verändert werden.



Möchtest du versuchen, diese Aufgabe zu lösen? Ich kann dir dann Feedback geben und die Lösung erklären.