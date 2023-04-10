function bajannarar(a){
if(a % 3 == 0){
  return true;
} else { 
  return false; 
}
};
// console.log(bajannarar(11));

function mianishOrErknish(a){
  if(a >= 0 && a <= 9){
    return 'Miavor';
  } else if(a >= 10 && a <= 99){
    return 'Erknish';
  } else if(a >= 100 && a <= 999){
    return 'Eranish';
  } else {
    return 'chgitem inch e';
  }
};
// console.log(mianishOrErknish(11771));
let myObj1 = {
  firstName: "Anahit",
  lastName: "Sargsyan",
  profession: "programmer",
  gender: "female"
};
let myObj2 = {
  firstName: "Milana",
  lastName: "Amelyan",
  profession: "QA",
  gender: "male"
};

function getGender(gender){
  if(gender === 'male' || gender === 'female'){
    return 'the gender is ' + gender;
  } else {
    return 'the person is not normal'
  }
};
// console.log(getGender(myObj1));

function getGender2(person){
  if(person.gender !== 'Other'){
    return 'the person is not normal';
  } else {
    return 'the gender is ' + person.gender;
  }
};
// console.log(getGender1(myObj1));
// console.log(getGender2(myObj2));