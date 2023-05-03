const str4 = '  Could you tell me about the job in more detail or can we have a short call  ';

function toUpperCaseAllWords(str4){
    let splitText = str4.split(' ');
    // return str4.split(' ');
    for (let i = 0; i < splitText.length; i++) {
        // console.log(splitText[i]);
        splitText[i] = splitText[i].charAt(0).toUpperCase() + splitText[i].substring(1);    
    }
        return splitText.join(" ");
}
// console.log(toUpperCaseAllWords(str4));

// create a function which will rotate and change first later to uperCase

function rotateText(text){
    let splitText = text.split("").reverse().join("").toLowerCase();
    let firstCharacter = splitText.charAt(0).toUpperCase();
    let capitalizedString = firstCharacter + text.slice(1);
    
    return capitalizedString;
}
console.log(rotateText("Ani"));