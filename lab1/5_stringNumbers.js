function stringNumber(n) {
    let input = parseInt(n);
    let arr = [];
    for (i = 1; i <= input; i++) {
        arr.push(i);
    }
    let arrayString = String(arr);
    let result = arrayString.replace(/,/g, "");
    console.log(result);
}

stringNumber(10);