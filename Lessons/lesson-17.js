const sumTwoNums = (num1, num2) => {   //can also be without argument
    return num1 + num2;
};

// console.log(sumTwoNums(7, 9));

const numSum = (num3, num4) => num3 + num4;

// console.log(numSum(5, 7));

const returnMyName = () => {
    return "Ani";
};
// console.log(returnMyName());

const flowers = ['Rose', 'Lotus', 'Jasmine', 'Sunflower', 'Daisy', 'Tulip', 'Magnolia', 'Lavender', 'Balsam', 'Flax']
//map

const otherVar = flowers.map((caxik) => {
    return 'Beautiful ' + caxik;
});
// console.log(otherVar); //'Beautiful Daisy'

const numbers = [1, 5, 7, -12, 9, 6];
const pows = numbers.map((item) => {
    return Math.pow(item, 2);  //ananimus function
});
// console.log(pows);

//filter
const zuyg = numbers.filter((item) => {
    return item % 2 === 0;
});
// console.log(zuyg);

//reduce

const reduced = numbers.reduce((acc, item) => {
    return acc + item;
}, 0);
// console.log(reduced);

flowers.push('Lara'); //adding last item
// console.log(flowers);

flowers.pop();  // deleted last item
// console.log(flowers);

flowers[flowers.length-1] = 'Daisy'; //change the last arr item
console.log(flowers);