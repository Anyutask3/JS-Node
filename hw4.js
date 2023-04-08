// write a function to get the names from the people array and for each person in zodiacSign array
// get matching object accoring to index and display
// if zodiacSignName exists '<personName> is <zodiacSignName>, his/her supporting planet is <sodiacSignPlanet> and color is <sodiacSignColor>
// else, if zodiacSignName does not exist, return 'No zodiacsign found for <personName>, please, check info.'
let a = b;
// console.log('A = ' + a );
let b = a;  //
// console.log('B = ' + b);
const people = ['Silvik', 'Ani S.', 'Gago', 'Ani I.', 'Milana', 'Seda', 'Poghos'];
const zodiacSign = [
    {
        zodiacSignName: 'Silvik',
        supportingPlanet: 'Ani S.',
        color: 'yellow'
    }, 
    {
        zodiacSignName: 'Gago',
        supportingPlanet: 'Saturn',
        color: 'grey'
    },
    {
        zodiacSignName: 'Ani I.',
        supportingPlanet: 'Uranus and Saturn',
        color: 'blue'
    },
    {
        zodiacSignName: 'Milana',
        supportingPlanet: 'Venus',
        color: 'light pink and blue'
    },
    {
        zodiacSignName: 'Seda',
        supportingPlanet: 'Mars',
        color: 'red'
    },
    {
        zodiacSignName: 'Poghos',
        supportingPlanet: 'Pluto and Mars',
        color: 'black'
    },
    {
        zodiacSignName: 'Inoplanetyanin',
        supportingPlanet: 'Mars',
        color: 'green'
    },
];
   
 let(people === zodiacSign);
   function getZodiacInfo(a, b) {
    if (b.zodiacSignName) {
        return a + ' is ' + b.zodiacSignName + ' his/her supporting planet is ' + b.supportingPlanet + ' and color is ' + b.color;
    } else {
        return 'No zodiacsign found for ' + people + ' please, check info.';
    }
   };

   console.log(getZodiacInfo(people[0],zodiacSign[0]));