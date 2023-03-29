let newNum1 = 19;
let newNum2 = 22;
let newNum3 = 33;

// newNum1 = newNum2;
// newNum2 = newNum3;

// console.log(newNum1); //22;
// console.log(newNum2);  //33;
// console.log(newNum3)  //33;

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
    gender: "female"
};

let myObj3 = {
    firstName: "Ani",
    lastName: "Sargsyan",
    profession: "QA",
    gender: "female"
};

myObj1 = myObj2;
myObj2.profession = "Barev"; 
myObj2 = myObj3;
myObj2.firstName = "Martiros";
myObj3.gender = "Other"; 

// console.log(myObj1); 
// console.log(myObj2);  
// console.log(myObj3);  

//---------------------------

function myCoolFunc(a, b){
    return 'Dzez hamar pox em tpel ' + a + ' ev ' + b;
}

// console.log(myCoolFunc('Ani', 'Gago'));

// uxankyan paragici hashvel
function uxankyanParagic(erkarutyun, laynutyun){
 return 2 * erkarutyun + 2 * laynutyun;
}
console.log(uxankyanParagic(4, 6));
