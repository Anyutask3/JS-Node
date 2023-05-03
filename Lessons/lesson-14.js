let str = "Hello world!";
// console.log(str.charAt(0)); //"H"

// console.log(str.includes('world')); //'true'

// console.log(str.indexOf('e')); 

//loUppercase
//LoLowercase
// console.log(str.toUpperCase());  //HELLO WORLD
// console.log(str.toLocaleLowerCase()); //hello world

//replace - poxum e miayn 1 handipatc@
//replaceAll - poxum ebolor handipacner@
// console.log(str.toLocaleLowerCase().replace('ll', 'WW')); //heWWo world!

const str1 = "CTFL certification is recognized as a prerequisite to all other ISTQB® certifications where Foundation Level is required";
//console.log(str1.split(' '));// ktrum hanum e qo tvac stringow

const str2 = 'Certified Tester Foundation Level';
// console.log(str2.substring(2, 5)); // rti - verjin idex@ neraryal chi

// const str3 = 'I am really interesting on this position.';
// console.log(str3.substring(2, 5)); //rtifi - index u qani carecter 

const str4 = '  Could you tell me about the job in more detail or can we have a short call  ';
// console.log(str4.trim()); //jnjum e miay skzbi u verji spaceer@

function lastChar(str5){
  return str5.charAt(str.length-1);
 
}
console.log(lastChar("Could you tell me about the job in more"));