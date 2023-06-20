function mySum(){
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    // return sum;
};

// console.log(mySum());
function oddsOrEvel(){
    const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const odds = myNum.filter((num) => num % 2 === 1);
    return odds;
};
// console.log(oddsOrEvel()); 

const persons = [{
    firstname: "Dan",
    lastname: "Tiger",
    age: 21,
    selary: 5000    
  },
  {
    firstname: "Fan",
    lastname: "Tiger",
    age: 25,
    selary: 7000  
  },
  {
    firstname: "Frank",
    lastname: "Lion",
    age: 19,
    selary: 1700  
  },
  {
    firstname: "Bilal",
    lastname: "Zakki",
    age: 35,
    selary: 6300  
  }
];


function newPersons(e){
  return e.map((item) => {
    item.fullName = item.firstname + " " + item.lastname;
    return item;
  });
}
 console.log(newPersons(persons));

 function menuItemTopping(){
  const myValue = Object.values(menuItem.batters.batter);
  const myText = 'batter contains ';
  for(let i = 0; i < myValue.length; i++){
      const currentObj = myValue[i];
      const currentObjValue = currentObj.type;
      console.log(`${myText} ${currentObjValue} `);
  }
}
console.log(menuItemTopping());