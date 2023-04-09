const myObj1={
    type:'dog',
    name:'Dona',
    age:'1',
    hasFam:'true'
};
//function has to tell if the dog Dona is happy to have family. If not please help fined a family for <name>
function ishappy (shunik) {
if (shunik.hasFam = true)  
  return shunik.name + 'is happy to have family.';
  else {
   return 'Please help to find a family for' + shunik.type + 'Dona.name';
  }
};
console.log(ishappy(myObj1));