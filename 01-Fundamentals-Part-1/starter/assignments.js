//1. LECTURE: Values and Variables
const country = "India";
const continent = "Asia";
const population = 1381.59;

console.log(country);
console.log(continent);
console.log(population);

//2. LECTURE: Data Types
const isIsland = false;
console.log(typeof country);
console.log(typeof isIsland);
console.log(typeof population);
//console.log(typeof language);

//3. LECTURE: let, const and var
const language = "Hindi";
console.log(language);

//4.LECTURE: Basic Operators
const peopleInHalfPartOfPopulation = population / 2;
const avgCountryPopulation = 33;
const populationInFinland = 6;
const description = 'Portugal is in Europe, and its 11 million people speak portuguese';

console.log(peopleInHalfPartOfPopulation);
console.log(peopleInHalfPartOfPopulation + 1);
console.log(population > avgCountryPopulation);
console.log(population > populationInFinland);

const desc = `${country} is in ${continent}, and its ${population} people speaks ${language} `;
console.log(desc);

//5. LECTURE: Taking Decisions: if / else Statements
if (population > 33) {
    console.log('Portugal\'s population is above average');
} else {
    console.log(`Portugal\'s population is 22 million below average`);
}

//5. LECTURE: Type Conversion and Coercion
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

//6. LECTURE: Equality Operators: == vs. ===
/*
const numNeighbours=Number(prompt('How many neighbour countries does your country have?'));
if(numNeighbours ===1){
    console.log('Only 1 border!');
}else if(numNeighbours > 1){
    console.log('More than 1 border');
}else{
    console.log('No borders');
}*/

//7. LECTURE: Logical Operators
if (language === 'English' && population < 50 && !isIsland) {
    console.log('You should live in India :)');
} else {
    console.log('India does not meet your criteria :(');
}

//8. LECTURE: The switch Statement
let message;
switch (language) {
    case 'chinese or mandarin':
         message = 'MOST number of native speakers!';
        break;
    case 'spanish':
        message = '2nd place in number of native speakers';
        break;
    case 'english':
        message = '3rd place';
        break;
    case 'hindi':
        message = 'Number 4';
        break;
    case 'arabic':
        message = '5th most spoken language';
        break;
    default:
        message = 'Great language too :D';
}

//9. LECTURE: The Conditional (Ternary) Operator
console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`);