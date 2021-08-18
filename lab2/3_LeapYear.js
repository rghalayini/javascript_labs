function IsYearLeap(arr) {
    let year = parseInt(arr[0]);
    if (year % 100 == 0) {
        console.log('no');
        return;

    }
    if (year % 4 == 0 || year % 400 == 0) {
        console.log('yes');
        return;
    }
    console.log('no')
}

test = ['1900'];
IsYearLeap(test);