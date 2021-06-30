// Rappel des types de données
let string = "Chaine";
let number = 25;
let boolean = true;
let maVariable; // type Undefined

// Tableaux
let array = ["Bordeaux", "Toulouse", "Nantes"];
// console.log(array[0][3]);

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];
// console.log(array2[4].nom);

let objet = {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
};

// objet.adresse = "22 rue du code";
// console.log(objet);

let data = [{
        pseudo: "Denis",
        age: 33,
        technos: ["Javascript", "React", "NodeJs"],
        admin: false,
    },
    {
        pseudo: "Samia",
        age: 24,
        technos: ["CSS", "React", "NodeJs"],
        admin: false,
    },
    {
        pseudo: "Nikola",
        age: 42,
        technos: ["Php", "React", "NodeJs"],
        admin: true,
    },
];
// console.log(data[2].pseudo[0]);

//---------------------------
// Les structures de controle
//---------------------------
if (data[0].age > data[1].age) {
    // console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
    // Valeur si faux
}

// While
let w = 0;

while (w < 10) {
    w++;
    // console.log("La valeur de w est de : " + w);
}

// Do while
let d = 0;

do {
    d++;
    // console.log(d);
} while (d < 5);

// Les boucles for
for (const user of data) {
    // document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
}

// on déclare la valeur de i | jusqu'où on boucle | on incrémente i si la condition 2 n'est pas remplie
for (i = 0; i < data.length; i++) {
    // console.log(i);
    // console.log(data[i].technos[0]);
    // document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";
    // document.body.innerHTML += "<h2>" + data[i].technos + "</h2>";
}
// Switch
document.body.addEventListener("click", (e) => {
    switch (e.target.id) {
        case "javascript":
            document.body.style.background = "yellow";
            break;
        case "php":
            document.body.style.background = "violet";
            break;
        case "python":
            document.body.style.background = "blue";
            break;
        default:
            null;
    }
});

//----------------
// Méthodes String
//----------------
let string2 = "Javascript est un langage orienté objet";

// console.log(typeof "42");
// console.log(eval(parseInt("1") + 2));
// console.log(isNaN(string));

// console.log(string2.length);
// console.log(string2[string2.length - 1]);

// console.log(string2.indexOf("langage"));
// console.log(string2.indexOf("x")); // Retourne -1 s'il ne le connait pas

// let newString = string2.slice(20);
// let newString = string2.slice(5, 17);
// console.log(newString);

// console.log(string2.split(" "));

// console.log(string2.toLowerCase());
// console.log(string2.toUpperCase());

// console.log(string2.replace("Javascript", "PHP"));

//-----------------
// Méthodes Numbers
//-----------------

let number2 = 42.1234;
let numberString = "42.12 est un chiffre";

// console.log(number2.toFixed(1));
// console.log(parseInt("43"));
// console.log(parseInt(numberString));
// console.log(parseFloat(numberString));

// Math
// console.log(Math.PI);
// console.log(Math.round(4.5));
// console.log(Math.floor(4.9)); takerib ila el3adadde el elssegher
// console.log(Math.ceil(4.1)); takerib ila el3adadde el akbar
// console.log(Math.pow(2, 7)); 2 osse 7 
// console.log(Math.sqrt(16)); mouraba3

// console.log(Math.floor(Math.random() * 50)); chifre entre 1 et 50


//-----------------
// Méthodes Arrays
//-----------------

let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

// let newArray = array3.concat(array4);
// console.log(newArray);   fusionné de tableau ds seul tableau

// let newArray = [...array3, ...array4];  fusionné de tableau ds seul tableau
// console.log(newArray);

// console.log(array3.join(' '));

// console.log(array3.slice(1));
// console.log(newArray.slice(3, 5)); garder des element ds une tableau 

// console.log(array3.indexOf("Php"));

array3.forEach((languages) => console.log(languages));

// console.log(array3.every((language) => language == "Php"));
// console.log(array3.some((language) => language == "Php"));

// let shift = array3.shift(); reteré 1 er element 
// console.log(array3);

// console.log(array3.pop()); retéré dernier élément

// const restArray = array3.splice(0, 2, ...array4);
// console.log(array3);

// IMPORTANT //
let arrayNumber = [4, 74, 28, 12, 1];
// console.log(arrayNumber.reduce((x, y) => x + y));
arrayNumber.push(17);
// console.log(arrayNumber);    ajoute un élment au tabbleau

// FILTER(filtré et gardé certaine element au les chose ds un tableau), SORT(trier et selectionné des objet ), MAP (listé les chose si comme foreach mais si mieux quelle)
// console.log(arrayNumber.filter((number) => number > 10));
// console.log(arrayNumber.sort());
// console.log(arrayNumber.sort((a, b) => a - b));

// document.body.innerHTML = arrayNumber
//   .map((number) => `<li>${number}</li>`)
//   .join("");