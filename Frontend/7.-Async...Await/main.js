// function getPokemon() {
//     return new Promise((resolve, reject) => {
//         fetch("https://pokeapi.co/api/v2/pokemon")
//         .then(response => response.json())
//         .then(data => resolve(data))
//         .catch(error => reject(error));
//     });
// }
async function getPokemon() {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon");
            const data = await response.json();
            return data;
        } catch (error) {
            console.log("Ha habido un error", error);
        } finally {
            throw "Datos no encontrados"
            // console.log("La petición ha terminado");
        }
}

async function printPokemon(){
    try {
        console.log(await getPokemon());
    }
    catch(e) {
        console.log("Error", e);
    }
}

console.log("Antes");
printPokemon();
console.log("Después");
// getPokemon().then(pokemons => console.log(pokemons)).catch(error => console.error(error));

