const myObj1 = {
    type: 'Dog',
    name: 'Afin',
    age: '8 mounths',
    hasFamily: true
};
const myObj2 = {
    type: 'Dog',
    name: 'Dingo',
    age: 4,
    hasFamily: false
};

function myDogFamily(dog){
    if(dog.hasFamily){
    return ('This dog has a family and his name is ' + dog.name)
} else {
  return 'This dog is homeless, please help find a family for ' + dog.name;
}
};
console.log(myDogFamily(myObj1));
console.log(myDogFamily(myObj2));