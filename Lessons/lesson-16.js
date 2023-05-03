const text = "Gago";
function replaceText(){
    let changText = text.toLowerCase().replaceAll('g', 'd');
    const capitalizedString = changText.charAt(0).toUpperCase() + changText.substring(1);
    // const capitalizedString = changText.replace('d', 'D');
    return capitalizedString;
};
// console.log(replaceText());

function deleteSpace(str){
//  return str.replaceAll(' ', '');
let str2 = str.split(' ').join('');
return str2;

}
console.log(deleteSpace("Some of the best places to practice JavaScript include Edabit,"));