//Coding challenge 1

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