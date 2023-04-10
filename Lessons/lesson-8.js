function checkNumber(num){
    if(typeof num === 'number'){
        if(num > 100){
            return 'Number is greder then 100';
        } else if(num === 100){
            return 'The numer is equal 100';
        } else if(num < 100){
            return 'number is smaler then 100';
        } 
    } else {
        return 'Please proved a number';
    }
};
// console.log(checkNumber('lesson'));

const zodiacSign = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio'];

// for (let i = 0; i < zodiacSign.length; i++){
//  console.log('My index is now: ' + i);
//  console.log(zodiacSign[i]);
// };

for(let i = 0; i <= zodiacSign.length - 1; i = i + 3){
 console.log('My index is now: ' + i);
 console.log(zodiacSign[i]);
};