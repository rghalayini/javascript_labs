function OddEven(arr) {
    let num = arr[0];
    if (!parseFloat(num) == parseInt(num)) {
        console.log("odd");
        return;
    }
    if (num % 2 == 0) {
        console.log("even");
        return;
    }
    console.log("odd");

}
test = ['8'];
OddEven(test);