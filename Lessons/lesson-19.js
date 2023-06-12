// Array.isArray

const myArr = [1, 3, 5, 7, 9, 8, 5];
// console.log(typeof myArr); //veradarcnum e obj but it is arr
// console.log(Array.isArray(myArr)); //true, stugum e vor arrey e

const myPopp = myArr.pop();
// console.log(myPopp);  // veradarcnum e jnjac verjin andam@
// console.log(myArr); // veradarcnum e nuyn arr bayc aranc verjin andami

myArr.push('Ani');
// console.log(myArr); // verjic avelacnum e Ani

const myJoin = myArr.join('+');
// console.log(myJoin); // type poxum e string u miacnum e irar

const myShift = myArr.shift();
// console.log(myShift); // arandzin ktrum pahum e arajin andam@
// console.log(myArr); // veradarcnum e jnjac arajin andam@

const myUnShift = myArr.unshift('Ani123');
// console.log(myShift); //veradarcnum e lenght@
// console.log(myArr); // veradarcnum e dimacic avelacrac array

// const mySort = myArr.sort(); // sort e anum aybenakan kayqov
// console.log(mySort);

const myReverce = myArr.reverse(); //shrjum e array@
// console.log(myReverce);

const mySort = myArr.sort(
  (a, b) => {
    return a - b;
  }
);
// console.log(mySort);
const myArr1 = [1, 4, [[7], [11]]];
const myFlet = myArr1.flat(); // pakasacnum e 1 level, 1 arrayi pakagic@ jnjum e
// console.log(myFlet); 