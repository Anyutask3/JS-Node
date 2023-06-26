const myObj = {
    firstName: 'Milana',
    lastName: 'Amelyan',
    position: 'Qa'
};

// const otherObj = myObj;
// otherObj.firstName = 'ANI';

// console.log(myObj);
// console.log(otherObj);

// const otherObj = {...myObj};
// otherObj.firstName = 'ANI';
// console.log(myObj);
// console.log(otherObj);


const otherObj = {...myObj, position: 'developer', mood: 'happy'};
// otherObj.firstName = 'ANI';
// console.log(myObj); //{ firstName: 'Milana', lastName: 'Amelyan', position: 'Qa' }
// console.log(otherObj); //{ firstName: 'Milana', lastName: 'Amelyan', position: 'developer' }


const myArry1 = ['Karmir', 'Dexin', 'Kanach'];
const myArry2 = ['Kapuyt', 'Sev', 'Erknaguyn'];

const otherArr = [...myArry1, ...myArry2, 'Spitak', {guyn: 'Yellow'}];
// console.log(otherArr); //[ 'Karmir', 'Dexin', 'Kanach', 'Kapuyt', 'Sev', 'Erknaguyn', 'Spitak', { guyn: 'Yellow' } ]


const myObj3 = {
    firstName: 'Milana3',
    lastName: 'Amelyan3',
    position: 'QA'
};
// const{firstName, lastName} = myObj3 // Milana3, Amelyan3
// console.log(firstName); //Milana3

//rest
const myObj4 = {
    firstName: 'Milana3',
    lastName: 'Amelyan3',
    position: 'QA',
    mood: 'happy',
    curly: true
};
const{firstName, lastName, ...otherProps} = myObj4
// console.log(otherProps);  // { position: 'QA', mood: 'happy', curly: true }

const position = {
    position: myObj3.position
};
// console.log(position); //{ position: 'QA' }

const randomObj = {
    firstName,
    lastName, 
    otherProps
};
//  console.log(randomObj);
// // {
// //   firstName: 'Milana3',
// //   lastName: 'Amelyan3',
// //   otherProps: { position: 'QA', mood: 'happy', curly: true }
// // }

const myObj5 = {
    id: 56288743,
    firstName: 'Milana3',
    lastName: 'Amelyan3',
    position: 'QA',
    mood: 'happy',
    curly: true
};

const {id, ...newSaveObj} = myObj5;
console.log(newSaveObj); 
// {
//     firstName: 'Milana3',
//     lastName: 'Amelyan3',
//     position: 'QA',
//     mood: 'happy',
//     curly: true
//   }
