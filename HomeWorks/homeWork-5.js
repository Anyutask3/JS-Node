// Task 2//
// Create a function that will get persons and num as a parameter and check if person 
// is older / younger or the same age as the given num and return <firstname> <firstname> is younger than me
//  <firstname> <firstname> is older than me or  <firstname> <firstname> is the same age as me.

const persons = [
    {
      firstname: "Dan",
      lastname: "Abramov",
      age: 41
    },
    {
      firstname: "Elizabeth",
      lastname: "Tailor",
      age: 65
    },
    {
      firstname: "Frank",
      lastname: "Lion",
      age: 22
    },
    {
      firstname: "Monika",
      lastname: "Smith",
      age: 16
    },
  ];
  function myAge(persons, num){
    // let foundItem;
    if(typeof num !== 'number'){
        console.log('Please provide a number.');
        return;
    }

    for(let i = 0; i < persons.length; i++) {
        if(persons[i].age > num) {
            console.log(persons[i].firstname + ' ' + persons[i].lastname + ' is younger than me.');
        } else if(persons[i].age < num){
            console.log(persons[i].firstname + ' ' + persons[i].lastname + ' is older than me.');
        } else {
            console.log(persons[i].firstname + ' ' + persons[i].lastname + ' are the same age.');
        }
    }    
};

// myAge(persons, 27);

// Task 3 //

  // Create a function that will return sum (gumar) of all the numbers in array
  // Please, receive the array of numbers as an argument.
  const numbers = [1, 4, 33, 7, 55, 66, 8, 2, 100, 57];

  function arrSum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
     return sum; // harcnel Anahitin xi chi ashxatum aranc console.log
  };
// console.warn(arrSum(numbers));

// Task 4 //
// Create a function that will check it the student has passed the exam or not
  // if passed, return, <Name> <age> years old has passed the exam.
  // if not passed, return  <Name> <age> years old failed the exam. He/She will need to try again.
  const students = [
    {
      age: 60,
      name: "Penelope Rowland",
      passed: false
    },
    {
      age: 74,
      name: "Imogene Oneil",
      passed: true
    },
    {
      age: 34,
      name: "Vargas Long",
      passed: true
    },
    {
      age: 4,
      name: "Sasha Compton",
      passed: true
    },
    {
      age: 38,
      name: "Robert Dennis",
      passed: false
    },
    {
      age: 17,
      name: "Bethany Watson",
      passed: true
    },
    {
      age: 45,
      name: "Wagner Sparks",
      passed: false
    }
  ];
  
function examPassedOrFailed(arr){
    let exam = true;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].passed === exam) {
        console.log(arr[i].name + ' ' + arr[i].age + ' years old has Passed the exam');
        } else {
            console.log(arr[i].name + ' ' + arr[i].age + ' years old has Fail the exam');
        }
    } 
};
// examPassedOrFailed(students);
function studenstsStatusList(arr){
    let status = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].passed === true){
            status = status + 1
        }

    }
}