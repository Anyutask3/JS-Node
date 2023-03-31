// Task 1
// create a function, that will get a number as a parameter and the square root of that number 
// (4) will return 16, (10) will retun 100

// function squer(a){
//     return(a *a );
// };
// console.log(squer(15));

// Task 2
// create a function that will get any of the items from persons array as a parameter and return the 
// following string 'I have just met a person whose name is <firstname> + <lastname>';
persons = [
    {
      id: 325326,
      firstname: "Dan",
      lastname: "Tiger",
      image: "url",
      birthday: "03.18.1990",
      gender: "Male",
      hobbie: ["Football", "Reading"],
      nationality: "switzerland",
      friends: [325330, 325334],
      residence: 10041
    },
    {
      id: 325326,
      firstname: "Fan",
      lastname: "Tiger",
      image: "url",
      birthday: "03.18.2005",
      gender: "Male",
      hobbie: ["Football", "Reading"],
      nationality: "switzerland",
      friends: [325330, 325334],
      residence: 10041
    },
    {
      id: 325330,
      firstname: "Frank",
      lastname: "Lion",
      image: "url",
      birthday: "10.05.1991",
      gender: "male",
      hobbie: ["walking", "basketball"],
      nationality: "syria",
      friends: ["", "", ""],
      residence: 10041
    },
    {
      id: 325334,
      firstname: "Bilal",
      lastname: "Zakki",
      image: "url",
      birthday: "08.19.1999",
      gender: "male",
      hobbie: ["swimming", "walking"],
      nationality: "canda",
      friends: [325330, 325326],
      residence: 10012
    }
  ];
//   console.log(persons[1].firstname + " " + persons[1].lastname);

  const lala = "I have just met a person whose name is ";

   function metFriend(firstName, lastName){
    // firstName = persons[0].firstname;
    // lastName = persons[0].lastname;
    return(lala + firstName + " " + lastName);
   };

console.log(metFriend(persons[0].firstname, persons[0].lastname));





