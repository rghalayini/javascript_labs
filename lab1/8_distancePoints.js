function Distance(arr) {

    let x1 = parseFloat(arr[0]);
    let y1 = parseFloat(arr[1]);
    let x2 = parseFloat(arr[2]);
    let y2 = parseFloat(arr[3]);

    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
    console.log(distance)

}
DistanceArray = ['2.34', '15.66', '-13.55', '-2.9985'];
Distance(DistanceArray);