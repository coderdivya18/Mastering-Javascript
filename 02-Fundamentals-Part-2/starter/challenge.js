//1. Code Challenge 1
const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3,4,5));

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins wins the Trophy with an average of ${avgDolphins}`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas wins the Trophy with an average of ${avgKoalas}`);
    } else {
        console.log('No Team wins');
    }
}

checkWinner(scoreDolphins, scoreKoalas);

//2. Code Challenge 2
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(bills, tips, totals);

//3. Code Challenge 3
const john = {
    fullname: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        return this.bmi = this.mass / this.height ** 2;
    }

}

const mark = {
    fullname: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        return this.bmi = this.mass / this.height ** 2;
    }
}

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi);
console.log(john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullname}'s BMI (${mark.calcBMI()})
     is higher than ${john.fullname}'s BMI (${john.calcBMI()}) `);
}else if(john.bmi > mark.bmi){
    console.log(`${john.fullname}'s BMI (${john.calcBMI()})
     is higher than ${mark.fullname}'s BMI (${mark.calcBMI()}) `);
}else{
    console.log(`Both ${john.fullname}'s & ${mark.fullname}'s BMI are equal.`);
}

//4. Code Challenge 4
const calcTip2 = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills2=[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2=[];
const totals2=[];

for(let i=0; i< bills2.length; i++){
    const tip=calcTip2(bills2[i]);
    tips2.push(tip);
    totals2.push(tip + bills2[i]);
}
console.log(bills2,tips2,totals2);

const calcAverages=function (arr){
let sum=0;
for(let i=0; i< arr.length; i++){
    sum += arr[i];
}
    return sum / arr.length;
}

console.log(calcAverages(totals2));
console.log(calcAverages(tips2));