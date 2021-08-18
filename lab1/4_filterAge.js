function FilterByAge(arr) {
    let minNumber = Number(arr[0]);
    let person1 = { name: arr[1], age: arr[2] };
    let person2 = { name: arr[3], age: arr[4] };

    if (person1.age >= minNumber) {
        console.log("name: ", person1.name, ", age: ", person1.age);
    }
    if (person2.age >= minNumber) {
        console.log("name: ", person2.name, ", age: ", person2.age);
    }
}

brb = ["18", "mike", 15, "carina", 20];
FilterByAge(brb);