let body = document.querySelector("body");

let playerOption = document.createElement("div");
playerOption.id = "playoptions"


let elige = document.createElement("h4");
elige.innerText = "Elige tu Nombre y color para jugar";

let jugador1 = document.createElement("p");
jugador1.innerText = "Jugador-1"
jugador1.id = "player1";

let jugador2 = document.createElement("p");
jugador2.innerText = "Jugador-2"
jugador2.id = "player2";

let nombrejug1 = document.createElement("input");
nombrejug1.innerText = "Jugador 1";

let nombrejug2 = document.createElement("input");
nombrejug2.innerText = "Jugador 2";


let div = document.querySelector("div");
let p = document.querySelector("p");

body.appendChild(playerOption);
playerOption.appendChild(elige);
playerOption.appendChild(jugador1);
playerOption.appendChild(jugador2);
jugador1.appendChild(nombrejug1);
jugador2.appendChild(nombrejug2);


// const para = document.querySelector("#player1");

// para.addEventListener('click', updateName);

// function updateName() {
//   let name = prompt('Introduce nombre jugador 1');
//   para.textContent = 'Jugador 1: ' + name;
// }

// const para2 = document.querySelector("#player2");

// para2.addEventListener('click', updateName2);

// function updateName2() {
//   let name2 = prompt('Introduce nombre jugador 2');
//   para2.textContent = 'Jugador 2: ' + name2;
// }

function updateName() {
    let name = 
}