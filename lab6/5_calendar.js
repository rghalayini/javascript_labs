function calendar(arr) {
    let selectedDay = arr[0];
    let selectedMonthNb = arr[1] - 1;
    let selectedYear = arr[2];
    var specifiedDate = new Date(selectedYear, selectedMonthNb, selectedDay);

    let container = $('#content');

    //insert table
    container.append($('<table>')
        .append($('<caption>')
            .text(monthFromNumber))
        .append($('<tbody>'))
        .append($('<tr>')
            .append($('<th>')
                .text('Mon'))
            .append($('<th>')
                .text('Tue'))
            .append($('<th>')
                .text('Wed'))
            .append($('<th>')
                .text('Thu'))
            .append($('<th>')
                .text('Fri'))
            .append($('<th>')
                .text('Sat'))
            .append($('<th>')
                .text('Sun')))
        .append($('<tr>'))
    );


    //create a function to return the month number into a string
    function monthFromNumber() {
        let monthString;
        if (selectedMonthNb == 0) { return monthString = 'January' + " " + selectedYear };
        if (selectedMonthNb == 1) { return monthString = 'February' + " " + selectedYear };
        if (selectedMonthNb == 2) { return monthString = 'March' + " " + selectedYear };
        if (selectedMonthNb == 3) { return monthString = 'April' + " " + selectedYear };
        if (selectedMonthNb == 4) { return monthString = 'May' + " " + selectedYear };
        if (selectedMonthNb == 5) { return monthString = 'June' + " " + selectedYear };
        if (selectedMonthNb == 6) { return monthString = 'July' + " " + selectedYear };
        if (selectedMonthNb == 7) { return monthString = 'August' + " " + selectedYear };
        if (selectedMonthNb == 8) { return monthString = 'September' + " " + selectedYear };
        if (selectedMonthNb == 9) { return monthString = 'October' + " " + selectedYear };
        if (selectedMonthNb == 10) { return monthString = 'November' + " " + selectedYear };
        return monthString = 'December' + " " + selectedYear;
    }

    //continue building the table based on the days
    //function firstDay() {
    var dayslist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let firstDay = new Date(specifiedDate.getFullYear(), specifiedDate.getMonth(), 1);
    let dayName = dayslist[firstDay.getDay()];
    let numberDaysInMonth = new Date(specifiedDate.getFullYear(), specifiedDate.getMonth(), 0).getDate();

    //document.write(numberDaysInMonth)

    //initiatilise sunday to 7 instead of 0
    let startDay = firstDay.getDay();
    if (startDay == 0) { startDay = 7; }

    //let initiatlise a startDay. It will be negative if it doesn't start on a Monday so we can fill empty cells
    let currentDay = 1 - startDay;
    let stop = false;

    while (!stop) {
        let Row = $('<tr></tr>');
        for (let i = 0; i < 7; i++) {
            let Column;
            currentDay++; //tp increment current day every time we loop
            //for positive dat values, they will have the value of the current calendar day
            if (currentDay > 0 && currentDay <= numberDaysInMonth) {
                Column = $('<td>' + currentDay + '</td>');
                //add a class to highlight the selected Day
                if (currentDay == selectedDay) {
                    Column.addClass('today');
                }
            }
            //for negative values, we will fill them with empty cells
            else {
                Column = $('<td></td>');
            }
            Column.appendTo(Row);
            if (currentDay == numberDaysInMonth) {
                stop = true;
            }
        }
        Row.appendTo($('table'));
    }
}