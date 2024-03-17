const marvel_heroes = ["Thor", "Ironman", "Spiderman"];

const dc_heroes = ["Superman", "Flash","Batman"];

//console.log(marvel_heroes);
//console.log(dc_heroes);

//marvel_heroes.push(dc_heroes);
const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes);

const All_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(All_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray(["Sunil", "Sonali"]));
console.log(Array.from("Sunil"));


