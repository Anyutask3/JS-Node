// 1 //
// Guess what should each variable contain (a, b, c, d, e)
let a = 5;
let b = a;
a = {
    name: 'Poghos',
    surName: 'Saghatelyan',
    age: 44,
    gender: 'male'
};
const c = [11, 32, 'Some word', {
    type: 'dog',
    name: 'Archuk'
}];

a = c,
c.age = 3,
a.surName = 'Karapetyan';

let d = false;
let e;
d = e;

console.log(a); 
//[
//     11,
//     32,
//     'Some word',
//     { type: 'dog', name: 'Archuk' },
//     age: 3,
//     surName: 'Karapetyan'
//   ]
console.log(b); // 5

console.log(c);
// [
//     11,
//     32,
//     'Some word',
//     { type: 'dog', name: 'Archuk' },
//     age: 3,
//     surName: 'Karapetyan'
//   ]
console.log(d); // undefined
console.log(e); // undefined


// 2// ------------
// write a function to get the names from the people array and for each person in zodiacSign array
// get matching object accoring to index and display
// if zodiacSignName exists '<personName> is <zodiacSignName>, his/her supporting planet is <sodiacSignPlanet> and color is <sodiacSignColor>
// else, if zodiacSignName does not exist, return 'No zodiacsign found for <personName>, please, check info.'

const people = ['Silvik', 'Ani S.', 'Gago', 'Ani I.', 'Milana', 'Seda', 'Poghos'];
const zodiacSign = [
    {
        zodiacSignName: 'Gemini',
        supportingPlanet: 'Mercury',
        color: 'yellow'
    },
    {
        zodiacSignName: 'Capricorn',
        supportingPlanet: 'Saturn',
        color: 'grey'
    },
    {
        zodiacSignName: 'Aquarius',
        supportingPlanet: 'Uranus and Saturn',
        color: 'blue'
    },
    {
        zodiacSignName: 'Libra',
        supportingPlanet: 'Venus',
        color: 'light pink and blue'
    },
    {
        zodiacSignName: 'Aries',
        supportingPlanet: 'Mars',
        color: 'red'
    },
    {
        zodiacSignName: 'Scorpio',
        supportingPlanet: 'Pluto and Mars',
        color: 'black'
    },
    {
        zodiacSignName: '',
        supportingPlanet: '',
        color: ''
    },
];

function personZodiacSign(zodiacSign, people){
    if (zodiacSign.zodiacSignName) {
        return (people + ' is ' + zodiacSign.zodiacSignName + 
        ' his/her supporting planet is ' + zodiacSign.supportingPlanet + 
        ' and color is ' + zodiacSign.color);
    } else {
        return 'No zodiacsign found for ' + people +',' + ' please, check info.';
    }
};
// console.log(personZodiacSign(zodiacSign[0], people[0]));
// console.log(personZodiacSign(zodiacSign[1], people[1]));
// console.log(personZodiacSign(zodiacSign[2], people[2]));
// console.log(personZodiacSign(zodiacSign[3], people[3]));

// console.log(zodiacSign[1].zodiacSignName, people[1]);

// 3 // ----------
// Wite a function, that will get a number as an argument and check, 
// if the number is positive, will return square of the number (tvi qarakusin)
// else will return 'Please, provide a positive number';

function positivOrNegativ(a){
 if(a >= 0){
    return a * a;
 } else {
    return  'Please, provide a positive number';
 }
};
// console.log(positivOrNegativ(-11));