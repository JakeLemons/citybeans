// const country = 'America';
// const continent = 'North America';
// let population = 328000000;

// console.log(country);
// console.log(continent);
// console.log(population);

// const isIsland = false;
// let language = 'english';

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// population / 2;
// population + 1;
// console.log(population);
// let finlandPopulation = 6000000;
// console.log(population > finlandPopulation);
// let description = country + ' is in ' + continent + ', and its ' + population + ' people speak ' + language;


// if (population > 33000000) {
//     console.log(`${country}'s population is above average`);
// } else {
//     console.log(
//         `${country}'s population is ${33000000 - population} below average`
//     );
// }

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


// if (language === 'English' && population < 50000000 && !isIland) {
//     console.log(`You should live in ${country} :)`);
// } else {
//     console.log(`${country} does not meet your criteria:(`);
// };

// switch (language) {
//     case 'chinese':
//     case 'mandarin':
//         console.log('MOST number of native speakers!');
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers');
//         break;
//     case 'english':
//         console.log('3rd place');
//         break;
//     case 'hindi':
//         console.log('Number 4');
//         break;
//     case 'arabic':
//         console.log('5th most spoken language');
//         break;
//     default:
//         console.log('Great language too :D');
// }

// console.log(`${country}'s population is ${population > 33000000 ? 'above' : 'below'} average`);
// console.log(`${country}'s population is ${population}`)


/* Write your code below. Good luck! 🙂 */

// bmi = ("mass" / ("height" * "height"));
// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// let bmiMark = (78 / (1.69 * 1.69));
// console.log(bmiMark);

// let bmiJohn = (92 / (1.95 * 1.95));
// console.log(bmiJohn);

// let markHigherBMI = (bmiMark) > (bmiJohn);
// console.log(markHigherBMI);

// const firstName = 'Jake';
// const job = 'teacher';
// const birthYear = 1998;
// const year = 2077;

// const jake = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old.' + ' I work as a ' + job + '.';
// console.log(jake);

// const jakeNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jakeNew);

// console.log(`A regular string`);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// with multiple
// lines`);

// const age = 14;

// if (age >= 16) {
//     console.log('Billy can start driving license');
// } else {
//     const yearsLeft = 16 - age;
//     console.log(`Billy is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 1998;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// if (BMIJohn > BMIMark) {
//     console.log("John's BMI" + BMIJohn + "is higher than Mark's");
// } else {
//     console.log("Mark's BMI" + BMIMark + "is higher than John's");
// }

//type conversion
const inputYear = '1998';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jake'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + ' years old');