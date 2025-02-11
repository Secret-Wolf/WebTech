//Überwiegend richtig denke ich


let autovermietung = {
    gruendungsjahr: 2020,
    standort: "Dortmund",
    name: "Stadtmitte GMBH",
    fahrzeug1: {
        marke: "BMW",
        modell: "X3",
        baujahr: 2020,
        verfuegbar: true
    },
    fahrzeug2:{
        marke: "Audi",
        modell: "A4",
        baujahr: 2021,
        verfuegbar: false
    }
}




Object.setPrototypeOf(fahrzeug1, auto);
Object.setPrototypeOf(fahrzeug2, auto);

function auto (kennzeichen, türen, farbe){
    this.kennzeichen = kennzeichen;
    this.türen=türen;
    this.farbe=farbe;
}

let meinAuto = new auto("UN-TM-502E", 4, "weiß");

function motorrad (kennzeichen, leistung, farbe){
    this.kennzeichen = kennzeichen;
    this.leistung = leistung;
    this.farbe = farbe;
}

let motorrad1 = new motorrad("UN-JO-69", "800KW", "schwarz");

