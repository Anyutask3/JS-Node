const menuItem = {
	id: "0001",
	type: "donut",
	itemName: "Cake",
	ppu: 0.55,
	batters:
		{
			batter:
				[
					{ id: "1001", type: "Regular" },
					{ id: "1002", type: "Chocolate" },
					{ id: "1003", type: "Blueberry" },
					{ id: "1004", type: "Devil's Food" }
				]
		},
	topping:
		[
			{ id: "5001", type: "None" },
			{ id: "5002", type: "Glazed" },
			{ id: "5005", type: "Sugar" },
			{ id: "5007", type: "Powdered Sugar" },
			{ id: "5006", type: "Chocolate with Sprinkles" },
			{ id: "5003", type: "Chocolate" },
			{ id: "5004", type: "Maple" }
		]
};



function menuItemBetter(){
    const batterValues = Object.values(menuItem.batters.batter);
    const toppingValues = Object.values(menuItem.topping);
    const myText = 'Batter contains ';
    // for(let i = 0; i < batterValues.length; i++){
    //     const currentObj = batterValues[i];
    //     console.log (currentObj.type);
    //     console.log(`${myText} ${currentObjValue} `);
    // }
    console.log(batterValues);
    console.log(toppingValues);
}
console.log(menuItemBetter());



//lesson 22
//rest, spred

const myObj1 = {
    id: 1,
    age: 12,
    name:  'Ani',
    surname: 'Sargsyan'
};

const myObj2 = {
    hasChildren: true,
    single: false,
    education: 'higher'
};


// console.log(miavor);

//spred
const miavorner = {...myObj1};  //der ktpi myObj age = 12
myObj1.age =13;

const miavor = {...myObj1, ...myObj2, ...{selary: 3000}};
// console.log(miavor); 
//Patasxan
    // {
    //   id: 1,
    //   age: 13,
    //   name: 'Ani',
    //   surname: 'Sargsyan',
    //   hasChildren: true,
    //   single: false,
    //   education: 'higher',
    //   selary: 3000
    // }