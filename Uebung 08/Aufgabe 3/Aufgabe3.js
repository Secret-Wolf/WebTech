let tool={
    browserEngine: "Blink",
    category: "Browser"
}

let firefox={
    browserEngine: "Gecko",
    name: "Firefox"
}

let chrome={
    name:"Chrome"
}

//Zuerst das was den Prototype bekommt, dann den prototype selber
//Ein Prototype ist im prinzip eine vorlage
Object.setPrototypeOf(firefox, tool);
Object.setPrototypeOf(chrome, tool);

console.log(firefox);
console.log(chrome);
console.log(tool);