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
      firstname: "Jannifer",
      lastname: "Lopez",
      image: "url",
      birthday: "03.18.2005",
      gender: "female",
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
    }
  ];
// // Write a function that will get the objects from person as an argument, check if gender is male or female,
// // if the gender is female, return, 'I would like to know more about <firstname> <lastname>.'
// // else, return '<firstname> <lastname> mast be a good man.'
function database (box) {
    if (gender === 'female') {
        return 'I would like to know more about ' + box.firstname + ' ' + box.lastname
    } else {
        return box.firstname + ' ' + box.lastname + 'must be a good man.';
    };
}; 
console.log(database(per))