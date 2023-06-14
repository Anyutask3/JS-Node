const persons = [
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
      gender: "Female",
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
      gender: "Male",
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
      gender: "Female",
      hobbie: ["swimming", "walking"],
      nationality: "canda",
      friends: [325330, 325326],
      residence: 10012
    }
  ];

// const allFriends = persons.reduce(
//     (accumulator, currentValue) => {
//         // return
//         if(currentValue.friends[0] !== ''){
//             accumulator.push(currentValue.friends); 
//         }
//         return accumulator;
//     },
//     [],
//   );
//   console.log(allFriends);

// const genders = persons.reduce((accumulator, currentValue) => {
//     if (currentValue.gender == 'Female') {
//         accumulator.push(currentValue.firstname + currentValue.lastname + ' is a handsome man. ');    
//     } else if(currentValue.gender == 'Male'){
//         accumulator.push(currentValue.firstname + currentValue.lastname + ' is a pretty woman. ');
//     }
    
//     return accumulator;
//   }, []);
  
//   console.log(genders); 

function filterItems(arr, query) {
    return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
  }
  
  console.log(filterItems(persons, "female"));


  function newPersons(e){
    return e.map((item) => {
      item.firstname + " " + item.lastname;
      return item;
    });
  }
   console.log(persons);
  

  

