function dayName(date){
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return daysOfTheWeek[now.getDay()];
}
function greeting(date){
    return `Hello world! Happy ${dayName(now)}.`;
}