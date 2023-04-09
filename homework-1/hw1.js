const carOne = {
    color: 'purple',
    type: 'minivan',
    brand: 'Toyota'
  };

const carTwo = {
    color: 'red',
    type: 'cabrio',
    brand: 'BMW'
};

const carThree = {
    color: 'grey',
    type: 'truck',
    brand: 'Ford'
};

const carFour = {
    color: 'green',
    type: 'pickup',
    brand: 'Chevrolet'
};

const carFive = {
    color: 'black',
    type: 'station wagon',
    brand: 'Audi'
};

const owners = ["Ani", "Silvik", "Gago", "Seda", "Milana"]; 
let ownersHave = ' has a ';
let addSpace = ' ';
let sheLove = 'thate she loves';
 let heLove = 'thate he loves';

// For every owner according to the number in array create the following sentence:
// <OWNER> has a <COLOR> <Brand> <TYPE> thate he/she loves.
// Ani has a green Chevrolet pickup that she loves.
// Good luck!

console.log(owners[0] + ownersHave + carFour.color + addSpace + carFour.brand + addSpace + carFour.type + addSpace + sheLove);
console.log(owners[1] + ownersHave + carOne.color + addSpace + carOne.brand + addSpace + carOne.type + addSpace + sheLove);
console.log(owners[2] + ownersHave + carTwo.color + addSpace + carTwo.brand + addSpace + carThree.type + addSpace + heLove);
console.log(owners[3] + ownersHave + carThree.color + addSpace + carThree.brand + addSpace + carThree.type + addSpace + sheLove);
console.log(owners[4] + ownersHave + carFive.color + addSpace + carFive.brand + addSpace + carFive.type + addSpace + sheLove);