function NextDay(year, month, day) {
    let date = new Date(year, month, day);
    let tomorrow = new Date();
    tomorrow.setDate(date.getDay() + 1);
    let tomorrowString = [tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate()];
    console.log(tomorrowString)
}
NextDay('2016', '9', '30')