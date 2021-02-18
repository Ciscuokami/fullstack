// const body = document.querySelector("body");

// function paintPokeData(name, sprites) {

//     const container = document.createElement("div");
//     container.id = "container"

//     const nameP = document.createElement("p");
//     const imagenP = document.createElement("img");

//     nameP.innerText = name;
//     imagenP.src = "../Assets/sprites/sprites/pokemon/1.png"
//     imagenP.alt = "Picture "

//     container.appendChild(nameP);
//     container.appendChild(imagenP);

// 	body.appendChild(container);
// }


// function getPokeData() {

// 	fetch(`https://pokeapi.co/api/v2/pokemon/bulbasaur/`)
// 	.then(response => response.json())
// 	.then(data => {
// 		console.log(data);
// 		const {name} = data;
// 		paintPokeData(name);
// 	});
// }

// getPokeData();

const body = document.querySelector("body");

function paintPokeData(name, sprites) {

    const container = document.createElement("div");
    container.id = "container"

    const nameP = document.createElement("p");
    const imagenP = document.createElement("img");

    nameP.innerText = name;
    imagenP.src = "../Assets/sprites/sprites/pokemon/1.png"
    imagenP.alt = "Picture "

    container.appendChild(nameP);
    container.appendChild(imagenP);

    sprites.map(spritesFoto => {
		// Crees el contenedor
		const imgContainer = document.createElement("div");
		const imagenPoke = document.createElement("img");

		// Escribir la descripción
		imagenP.src = spritesFoto.back_default;
		// Meter el párrafo dentro del contenedor
		imgContainer.appendChild(imagenPoke);

		// container contenga a weatherContainer
		container.appendChild(imgContainer);

		return imgContainer;
	});

	body.appendChild(container);
}


function getPokeData() {

	fetch(`https://pokeapi.co/api/v2/pokemon/bulbasaur/`)
	.then(response => response.json())
	.then(data => {
		console.log(data);
		const {name, sprites} = data;
		paintPokeData(name);
	});
}

getPokeData();