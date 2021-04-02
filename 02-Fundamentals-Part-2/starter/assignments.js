//1. LECTURE: Functions
function describeCountry(country, population, capitalCity) {
    return (`${country} has ${population} million people and its capital city is ${capitalCity}`);
}

const country1 = describeCountry('India', 1381.92, 'Delhi');
const country2 = describeCountry('Finland', 6, 'Helsinki');

console.log(country1);
console.log(country2);

//2. LECTURE: Function Declarations vs. Expressions
const worldPopulation = 7900;

function percentageOfWorld1(population) {
    return ((population / worldPopulation) * 100);
}

// const percentagePopulation=percentageOfWorld1(1381.92);
// console.log(percentagePopulation);

//3. LECTURE: Arrow Functions
const countryPopulationPercentage = (population => ((population / worldPopulation) * 100));
const indiaPercentage = countryPopulationPercentage(1381.92);
console.log(indiaPercentage);

//4. LECTURE: Functions Calling Other Functions
function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world. `;
}

const populationCountry = describePopulation('India', 1381.92);
console.log(populationCountry);

//5. LECTURE: Introduction to Arrays
const populations = [1389.62, 95, 68, 110.45];
if (populations.length === 4) {
    console.log(true);
} else {
    console.log(false);
}

const populationPercentage = [countryPopulationPercentage(populations[0]),
    countryPopulationPercentage(populations[1]),
    countryPopulationPercentage(populations[2]),
    countryPopulationPercentage(populations[3])];

console.log(populationPercentage);

//6. LECTURE: Basic Array Operations (Methods)
const neighbours = ['Nepal', 'China', 'Bangladesh', 'Pakistan'];
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (neighbours.indexOf('Germany') === -1) {
    console.log('Probably not a central European country :D');
}

neighbours[neighbours.indexOf("Pakistan")] = "Bhutan";
console.log(neighbours);

//7. LECTURE: Introduction to Objects
const myCountry = {
    country: 'India',
    capital: 'Delhi',
    language: 'Hindi',
    population: 1391.82,
    neighbours: ['Nepal', 'China', 'Bangladesh', 'Pakistan'],
    describe: function () {
        return (`${this.country} has ${this.population} million ${this.language}-speaking people,
${this.neighbours.length} neighbouring countries and a capital like ${this.capital}`);
    },
    checkIsland: function () {
        return this.isIsland = this.neighbours.length === 0 ? true : false;
    }
}
console.log(myCountry);

//8. LECTURE: Dot vs. Bracket Notation
console.log(`${myCountry.country}
        has ${myCountry.population}
        million ${myCountry.language} - speaking
        people,
            ${myCountry.neighbours.length} neighbouring
        countries
        and
        a
        capital
        like ${myCountry.capital}`);

console.log(myCountry.population + 2.00);
console.log(myCountry['population'] - 2.00);

//9. LECTURE: Object Methods

console.log(myCountry.describe());
console.log(myCountry.checkIsland());

//10. LECTURE: Iteration: The for Loop
for(let i=1; i<=50; i++){
    console.log(`Voter number ${i} is currently voting`);
}

//11. LECTURE: Looping Arrays, Breaking and Continuing
const population=[110,1441,332,83];
const percentages2=[];
for(let i=0; i<population.length; i++){
    const perc=countryPopulationPercentage(population[i]);
    percentages2.push(perc);
}
console.log(percentages2);

//12. LECTURE: Looping Backwards and Loops in Loops
const listOfNeighbours=[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
    'Russia']];
for(let x=0; x < listOfNeighbours.length; x++){
    for(let y=0; y < listOfNeighbours[x].length; y++){
        console.log(`Neighbour: ${listOfNeighbours[x][y]}`);
    }
}

//13. LECTURE: The while Loop
const percentage3=[];
let i=0;
while(i<population.length){
    const perc=countryPopulationPercentage(population[i]);
    percentage3.push(perc);
    i++;
}
console.log(percentage3);