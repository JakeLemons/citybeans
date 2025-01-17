const country = 'America';
const continent = 'North America';
let population = 328000000;

console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
let language = 'english';

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

population / 2;
population + 1;
console.log(population);
let finlandPopulation = 6000000;
console.log(population > finlandPopulation);
let description = country + ' is in ' + continent + ', and its ' + population + ' people speak ' + language;


if (population > 33000000) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(
        `${country}'s population is ${33000000 - population} below average`
    );
}

// console.log('9' - '5'); // 4
// console.log('19' - '13' + '17'); // 617
// console.log('19' - '13' + 17); // 23
// console.log('123' < 57); // false
// console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143

// const numNeighbours = prompt('How many neighbour countries does your country have?');
// const numNeighbours = (2);
// if (numNeighbours === 1) {
//     console.log('only 1 border');
// } else if (numNeighbours > 1) {
//     console.log('more than 1 border');
// } else {
//     console.log('No borders');
// }


if (language === 'English' && population < 50000000 && !isIland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria:(`);
};

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

console.log(`${country}'s population is ${population > 33000000 ? 'above' : 'below'} average`);
console.log(`${country}'s population is ${population}`)
