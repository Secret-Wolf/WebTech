// Simulierte Bildergalerie-Datenbank
const images = [
    {
        id: 1,
        filename: "nature1.jpg",
        title: "Sonnenuntergang am See",
        description: "Ein friedlicher Abend in der Natur"
    },
    {
        id: 2,
        filename: "nature2.jpg", 
        title: "Berglandschaft",
        description: "Majestätische Berge im Morgenlicht"
    },
    {
        id: 3,
        filename: "nature3.jpg",
        title: "Waldweg",
        description: "Ein mystischer Pfad durch den Wald" 
    }
];

// Hier sollen Sie folgende Funktionen implementieren:

// 1. getCurrentImage(index) - Gibt das aktuelle Bild zurück
// 2. getNextImage(index) - Gibt das nächste Bild zurück (mit Wrap-Around)
// 3. getPrevImage(index) - Gibt das vorherige Bild zurück (mit Wrap-Around)
// 4. getGalleryView(index) - Gibt aktuelles, vorheriges und nächstes Bild für die Galerie-Ansicht zurück