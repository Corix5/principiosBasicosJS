//fetch

// fetch("https://pokeapi.co/api/v2/pokemon/")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data.results);
//     data.results.forEach((element) => {
//       console.log(element);
//     });
//   })
//   .catch((error) => console.log(error));

// async await
//este es una forma de recorrer con un for
// const obtenerPokemones = async () => {
//   try {
//     const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
//     const data = await res.json();
//     for (let i = 0; i < data.results.length; i++)
//       console.log(data.results[i].name);
//   } catch (error) {
//     console.log(error);
//   }
// };

// obtenerPokemones();

//utilizando map 
// const obtenerPokemones = async () => {
//   try {
//     const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
//     const data = await res.json();
//     //console.log(data.results);
//     const arrayNombres = data.results.map((poke) => poke.name);
//     console.log(arrayNombres);
//   } catch (error) {
//     console.log(error);
//   }
// };

// obtenerPokemones();

//filter devuelve el objeto con condiciones
const obtenerPokemones = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await res.json();
      //console.log(data.results);
      const arrayNombres = data.results.filter(
        (poke) => poke.name !== "bulbasaur"
      );
      console.log(arrayNombres);
    } catch (error) {
      console.log(error);
    }
  };
  
  obtenerPokemones();