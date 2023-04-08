function checkNumber(num){
    if (num !== 'number') {
        return 'Please provide number.'
    } else if(num > 100){
        return 'The numer is equal 100';
    } else if(num < 100){
        return 'The number is equal than 100';
    } else if (typeof num <100); {
        return 'The number is smaller than 100';
    }
};
console.log(checkNumber(true));