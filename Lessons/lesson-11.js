import dayjs from "dayjs";

function myBirthDay(monthDay){
    const currectDate = dayjs().format('DD/MM');
    if(currectDate === monthDay){
        console.log("Happy B");
    } else {
        console.log("Wait for your B day");
    }
// const currectDate = new Date;
// const currectMonth = currectDate.getMonth();
// const currectDay = currectDate.getDay();

};
// myBirthDay("18.04");

function myOwnModule(num){
    return Math.pow(num, 2);
};

export default myOwnModule;