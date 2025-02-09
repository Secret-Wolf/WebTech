//Bauplan für eine Engine. In der Grafik werden zwei verschiedene Engines erzeugt sozusagen -> die für den Browser, und die für JavaScript
function Engine(name, maintainer){
    this.name = name;
    this.maintainer = maintainer;
}

//Bauplan für den Browser, dieser besteht aus der Engine für den Browser und der Engine für JavaScript
function Browser (browserEngine, jsEngine){
    this.browserEngine = browserEngine;
    this.jsEngine = jsEngine;
}

let chrome = new Browser(new Engine("Blink", "Chromium"), new Engine ("V8", "Chromium"));

//BRave hat die gleichen Basiswerte wir Chrome (basiert ja theoretisch auf chromium),
//deshalb können wir wie in Aufgabe eins, chrome als basis verwenden und die werte von Chrome einfach auf brave draufhauen
let brave = new Browser (chrome.browserEngine, chrome.jsEngine);

console.log(chrome);
console.log(brave);