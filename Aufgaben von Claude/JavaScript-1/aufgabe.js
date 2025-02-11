

let kunde ={
    name: "Max Mustermann",
    kundenNr: "K123",
    premium: false
};

let bestellung ={
    artikelNR: "A789",
    menge: 3,
    preis: 29.99,
    premium: true
};

Object.setPrototypeOf(bestellung, kunde);