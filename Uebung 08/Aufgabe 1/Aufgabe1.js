//Aufgabe 1
let chrome = {
    browserEngine: { name: "Blink", maintainer: "Chromium"},
    jsEngine: {name: "V8", maintainer:"Chromium"}
}

// In der Grafik greifen chrome und brave auf die gleichen Objekte zu. Da
// da zuerst Chrome definiert wird, können wir brave einfach die zugehörigen Werte übergeben, statt brave mit den gleichen werte nochmal komplett neu zu bauen
let brave = {
    browserEngine: chrome.browserEngine,
    jsEngine: chrome.jsEngine
}


