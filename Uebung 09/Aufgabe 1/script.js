document.querySelector("#appTitle").style.fontStyle = "italic";


// getElementsByTagName("h2") gibt ein Array mit allen "h2" zurück
// um darauf zuzugreifen ist getElementsByTagName("h2")[0] erforderlich wenn man auf das Erste Element im Array zugreifen möchte

//document.querySelectorAll("h2")[0], wegen des All wird wieder ein Array zurück gegeben

//querySelector("h2") -> gibt nur das erste gefundene Element zurück
//document.querySelector("h2").innerHTML = "Aufgabe";

document.querySelectorAll("h2").forEach((h2) => h2.textContent = "Artikel " + h2.textContent);