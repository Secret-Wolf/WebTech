// Hier den Code ergaenzen!
let webtech = {
    credits: 5,
    title: "Web-Technologien",
    pruefung: { hilfsmittelErlaubt: true,
        maxPunkte: 100
    }
}

let klausur = {dauer: 120, hilfsmittelErlaubt: false}

Object.setPrototypeOf(webtech, klausur);

console.log(webtech.dauer);
