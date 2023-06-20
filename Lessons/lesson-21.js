// how to work with Object
const myObj = {
    eyeColor: 'Blue',
    age: '25',
    name: 'Ani',
    adress: 'sundukyan 27',
    email: 'anyutask3@gmail.com',
    height: 168,
    gender: 'femail',
    childerNames: ['Lara', 'Tigran'],
    education: {
        higher: 'MESI',
        secondary: 'Meghri Scoolk'
    }
};
const myKeys = Object.keys(myObj);
const myValue = Object.values(myObj);


// console.log(myKeys); //veradarcnum e bolor keyesr@ bayc arrey sarqac
 //console.log(myValue);
// console.log(myObj.education.secondary);

// for(let i = 0; i< keys.lenghth; i++){
//     console.log('This man is ' + myObj[keys])
// }clearImmediate

for(let i = 0; i < myKeys.length; i++){
     console.log(myKeys[i]);
};

//hasOwnProperty
if(myObj.hasOwnProperty('gender')){  //proporty anun@ ampayman tal vorpes string teche khaskana vareble
    // console.log('My gender is ' + myObj.gender);  // veradarcnum e True, False
}

for(let i = 0; i < myKeys.length; i++){
    const mykey = myKeys[i];
    console.log(myObj[mykey]); 
    // OR
    // console.log(myObj[myKeys[i]]); // veradarcnum e bolor keyer@
};


const myVar1 = 'Barev';
const myVar2 = 'Joxovurd';

console.log(`${myVar1} sireli ${myVar2} jan!`); 