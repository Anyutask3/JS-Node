let months= [
{
    name: "January",
    days:31
},
{
    name: "February",
    days:28
},
{
    name: "March",
    days:31
},
{
    name: "April",
    days: 31
},
{
    name: "May",
    days:31
},
{
    name: "June",
    days:31
},
{
    name: "July",
    days:31
},
{
    name: "August",
    days:31
},
{
    name: "September",
    days:31
},
{
    name: "October",
    days:31
},
{
    name: "November",
    days:31
},
{
    name: "December",
    days:31
}
];

// function getDaysInMonth(day_by_month){
//     for(let i = 0; i < day_by_month.length; i++){
//         console.log(day_by_month[i].name + ' has a ' + day_by_month[i].days + ' days.');
//        };
// }
// getDaysInMonth(months);

function getDaysInMonth(day_by_month, day){
    let i = 0;
    if(day_by_month[i].days == day){
    for(i = 0; i < day_by_month.length; i++){
        console.log(day_by_month[i].name + ' has a ' + day_by_month[i].days);
       };
} else {
    console.log('There is no such month');
}
}
getDaysInMonth(months, 28);
