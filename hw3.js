// Guess what should each variable contain (a, b, c, d, e)

// Task 1// -----------------

let a = 5;
// console.log('A = ' + a );
let b = a;  //5
// console.log('B = ' + b);
a = {
    name: 'Poghos',
    surName: 'Saghatelyan',
    age: 44,
    gender: 'male'
};
// console.log('A = ' + a );

const c = [11, 32, 'Some word', 
{
    type: 'dog',
    name: 'Archuk'
}];

// console.log('C = ' + c );
a = c,
// console.log('A = ' + a );
c.age = 3;
// console.log('C = ' + c );
a.surName = 'Karapetyan';
let d = false;
let e;
d = e;

console.log('A = '+ a);
console.log('B = '+ b);
console.log('C = '+ c);
console.log('E = '+ e);
console.log('D = '+ d);


// write a function to get the names from the people array and for each person in zodiacSign array
// get matching object accoring to index and display
// if zodiacSignName exists '<personName> is <zodiacSignName>, his/her supporting planet is <sodiacSignPlanet> and color is <sodiacSignColor>
// else, if zodiacSignName does not exist, return 'No zodiacsign found for <personName>, please, check info.'
//const people = ['Silvik', 'Ani S.', 'Gago', 'Ani I.', 'Milana', 'Seda', 'Poghos'],
//const zodiacSign = [
   // {
      //  zodiacSignName: 'Gemini',
      //  supportingPlanet: 'Mercury',
       // color: 'yellow'
    //},
//-------------------------------------

