let daten = [
    { lang: "Python", rating: 9.704 },
    { lang: "JavaScript", rating: 2.451 },
    { lang: "C", rating: 15.773 },
    { lang: "Java", rating: 16.896 },
    { lang: "Visual Basic .NET", rating: 5.287 },
    { lang: "C++", rating: 5.574 },
];

// Erstellt ein td-Element mit dem gegebenen 
// Textinhalt
let createTd = function (content) {
    let td = document.createElement("td");
    td.textContent = content;
    return td;
};

//Holt sich das Element tbody, dort kommen nachher die Daten rein
const tbody = document.querySelector("tbody");

//sortiert die Daten im Array absteigend
// -Wenn sie eine negative Zahl zurückgibt: a kommt nach b
// -Wenn sie eine positive Zahl zurückgibt: b kommt nach a
// -Wenn sie 0 zurückgibt: die Reihenfolge bleibt unverändert

// Kürzer wegen Arrow Function
daten.sort((a, b) => b.rating - a.rating);

/*
daten.sort(function(a, b) {
    return b.rating - a.rating;
});
*/

//Array mit daten drin, jedes Element wird durchlaufen
daten.forEach((datensatz, index) => {
    const tr = document.createElement("tr"); //erstellt für jeden Eintrag im Array eine neue Zeile

    //die Zeile ist erstellt worden, in jede Zeile kommen jetzt entsprechende "td" TableData (die einzelnen Zellen)
    //da die Zellen IN der Reihe gemacht werden, können wir die Variable der Zeile nehmen und innerhalb eine neues Element erstellen
    tr.appendChild(createTd(index + 1));


    //"datensatz" ist das ganze erste Element aus dem Array daten: { lang: "Python", rating: 9.704 } 
    //mit .lang greifen wir auf die Variable "lang" in diesem ganzen ersten wert zu
    tr.appendChild(createTd(datensatz.lang));

    //toFixed(3) auf 3 nachkommastellen
    tr.appendChild(createTd(datensatz.rating.toFixed(3)));

    tbody.appendChild(tr);

});