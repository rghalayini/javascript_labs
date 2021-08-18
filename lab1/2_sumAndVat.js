function sumVAT(arr) {
    let input = Array.from(arr);

    let sum = input.reduce((a, b) => a + b, 0)
    let VAT = sum * 20 / 100
    let Total = sum + VAT
    console.log("sum= ", sum)
    console.log("VAT= ", VAT)
    console.log("Total= ", Total)
}
numbers = [1.2, 2.6, 3.5];
sumVAT(numbers)