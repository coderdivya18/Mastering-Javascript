//Coding challenge 1 + 2

function calculateBMI(m,h){
    return (m / h ** 2) ;
}

const markBMI=calculateBMI(78,1.69);
const johnBMI=calculateBMI(92,1.95);
const markHighrBMI=markBMI > johnBMI;

if(markHighrBMI){
    console.log(`Mark\'s BMI ${markBMI} is higher than John\'s`);
}else{
    console.log(`John\'s BMI ${johnBMI} is higher than Mark\'s`);
}

//Coding Challenge 3
const avgScoreByDolphin=(97 + 112 + 101)/3;
const avgScoreByKoalas=(109 + 95 + 106)/3;
const minScore=100;

if(avgScoreByDolphin === avgScoreByKoalas && avgScoreByDolphin>=minScore && avgScoreByKoalas>=minScore){
    console.log(`Match is draw with the same average of ${avgScoreByKoalas}`);
}else if(avgScoreByDolphin > avgScoreByKoalas && avgScoreByDolphin >= minScore){
    console.log(`Team Dolphin wins with an average of ${avgScoreByDolphin}`);
}else if(avgScoreByKoalas > avgScoreByDolphin && avgScoreByKoalas >= minScore){
    console.log(`Team Koalas wins with an average of ${avgScoreByKoalas}`);
}

//Coding challenge 4
const bill=275;
const tip= bill>=50 && bill <=300 ? bill*0.15 : bill*0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);