function BoxesNeeded(arr) {
    let n = parseInt(arr[0]);
    let k = parseInt(arr[1]);
    if (n % k == 0) {
        console.log(n / k)
    } else if (!n % k == 0) {
        let boxNum = Math.ceil(n / k);
        console.log(boxNum)
    }
}

test = ['5', '10'];
BoxesNeeded(test);